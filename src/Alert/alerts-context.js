import React from "react";

export const alerts = {
    error: {
        open: false,
        message: ''
    },
    success: {
        open: false,
        message: ''
    }
}

export const AlertsContext = React.createContext({
        ...alerts,
        openSuccessAlert: () => {},
        closeSuccessAlert: () => {},
        openErrorAlert: () => {},
        closeErrorAlert: () => {}
}
);