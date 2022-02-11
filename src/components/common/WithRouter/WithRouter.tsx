import {
    useLocation,
    useNavigate,
    useParams,
    Location, NavigateFunction
} from "react-router-dom";

type ComponentWithRouterPropType = {
    location: Location
    navigate: NavigateFunction
    params: {userId: string}
}

export type WithRouterType = {
    router: ComponentWithRouterPropType
}


export function withRouter(Component: any) {
    function ComponentWithRouterProps(props: typeof Component) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component
                {...props}
                router={{ location, navigate, params }}
            />
    }

    return ComponentWithRouterProps;
}