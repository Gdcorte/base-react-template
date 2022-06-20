import {changeTheme} from 'settings/Theming/Action'
import {changeColor} from 'settings/Color/Action'

export {changeTheme} from 'settings/Theming/Action'
export {changeColor} from 'settings/Color/Action'

export const CHANGE_LOAD_STATE = "CHANGE_LOAD_STATE";

export interface settingsActionInterface {
    type: string,
    theme?: string,
    color?: string,
    loading?: boolean,
}

export const changeLoadState = (loading:boolean) => ({
   type: CHANGE_LOAD_STATE,
   loading: loading,
});

export const settingsActions = {
    color: changeColor,
    theme: changeTheme,
    globalLoadState: changeLoadState
}