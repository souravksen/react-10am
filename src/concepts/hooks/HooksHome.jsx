import UseCallBackHook from "./usecallbackhook/UseCallBackHook"
import UseEffectTask1 from "./useeffecthook/tasks/UseEffectTask1"
import UseEffectHome from "./useeffecthook/UseEffectHome"
import UseMemoHook from "./usememohook/UseMemoHook"
import UseRefHookHome from "./userefhook/UseRefHookHome"
import UseRefHookTask1 from "./userefhook/userefhooktask/UseRefHookTask1"
import UseStateHook from "./usestatehook/UseStateHook"
import UseStateTask1 from "./usestatehook/useStateHookTask/UseStateTask1"

const HooksHome=()=>{
    return (
        <div>
            {/* <UseStateHook/> */}
            {/* <UseStateTask1/> */}
            {/* <UseRefHookHome/> */}
            {/* <UseRefHookTask1/> */}
            {/* <UseEffectHome/> */}
            {/* <UseEffectTask1/> */}
            {/* <UseMemoHook/>  */}
            <UseCallBackHook/>
        

        </div>
    )
}
export default HooksHome