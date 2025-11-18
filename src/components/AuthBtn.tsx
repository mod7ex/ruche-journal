import { LogInIcon, LogOutIcon, TriangleIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { handleGoogleLogin, auth, handleSignOut } from "~/firebase";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, serializableUser } from '~/store/user'
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
    const [isActive, toggle] = useState(false);

    // @ts-ignore
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    const signout = () => {
        handleSignOut()
        dispatch(setUser(null))
    }

    const sigin = () => {
        handleGoogleLogin()
        toggle(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (_user) => {
            // console.log(_user)
            dispatch(setUser(_user ? serializableUser(_user) : null))
        });

        return () => unsubscribe();
    }, []);

    const boxRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        function handleClickOutside(event) {
            // @ts-ignore
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                toggle(false)
            }
        }

        // Listen for clicks on the whole document
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!user) return (
        <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="authentication"
            onClick={sigin}
        >
            <LogInIcon className="w-5 h-5 text-gray-700" />
        </button>
    )

    return (
        <div className='relative' ref={boxRef}>
            <button
                className='cursor-pointer'
                onClick={() => toggle(!isActive)}
            >
                <img src={user.photoURL!} alt="user icon" width={40} className='rounded-full shadow-lg transition-all duration-300 ease-in-out' />
            </button>

            {isActive &&
                <div className='absolute right-0 top-15 bg-gray-900 p-2 px-1 rounded shadow-lg text-gray-100'>
                    <p className='text-center font-bold mb-4'>{user.displayName}</p>

                    <hr className="mx-auto border-t border-gray-600 my-2 w-3/4 align-center" />

                    <TriangleIcon className='fill-gray-900 text-gray-900 absolute left-34' style={{ top: -18 }} />

                    <button
                        className="p-2 cursor-pointer top-16 hover:pl-3 hover:pr-1 transition-all duration-300 ease-in-out flex"
                        aria-label="authentication"
                        onClick={signout}
                    >
                        <LogOutIcon />
                        <span className='ml-3 text-nowrap'>Se déconnecter</span>
                    </button>
                </div>
            }
        </div>
    );
}
