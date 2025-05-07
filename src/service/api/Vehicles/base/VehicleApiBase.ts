import { Axios, HttpStatusCode, isAxiosError } from "axios";
import axiosBase from "../../../base/axios-base";
import toastr from "toastr";
import { event } from "../../../../util/events";

export default class VehicleApiBase extends axiosBase {
    constructor(path: string) {
        super(`${import.meta.env.BASE_URL}${path}`);
    }

    protected processAxios(axios: Axios) {
        axios.interceptors.request.use(
            (response) => {
                const sessionExpires = response.headers?.["Session-Expires-Unix"];
                if (sessionExpires) {
                    event.$emit("updateExpiration", Number(sessionExpires));
                }
                return response;
            },
            (error) => {
                if (isAxiosError(error)) {
                    this.handleAxiosError(error);
                }
                return Promise.reject(error);
            }
        );
    }

    private handleAxiosError(error: any) {
        const { status } = error;
        if (status === HttpStatusCode.Unauthorized) {
            event.$emit("sessionExpired");
            toastr.error("Session expired, please log in again");
        } else if (status === HttpStatusCode.Forbidden) {
            toastr.error("You do not have permission to perform this action");
        }
    }

    protected paginationParams(pagination: any): URLSearchParams {
        const params = new URLSearchParams();
        if (!pagination) return params;

        const { page, limit, direction, column } = pagination;
        page && params.append("page", page.toString());
        limit && params.append("limit", limit.toString());
        direction && params.append("direction", direction);
        column && params.append("column", column);

        return params;
    }
}