import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUser } from '../../context/github/GithubActions'

function UserSearch() {
    const [text, setText] = useState("")
	const { users,dispatch } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)
    const handleSubmit =async (e) =>
    {
        e.preventDefault()
        if (text === "") {
            setAlert("please enter something","error")
        }
		else {
			dispatch({
				type:"SET_LOADING"
			})
            const users = await searchUser(text)
			dispatch({
				type: "GET_USERS",
				payload:users
			})
            setText("")
        }
        }
  return (
		<div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="right-0 absolute rounded-l-none w-36 btn btn-lg"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			<div>
				{users.length > 0 && (
					<button onClick={()=>{dispatch({type:"CLEAR_USERS"})}} className="btn btn-ghost btn-lg">
						Clear
					</button>
				)}
			</div>
		</div>
	);
}

export default UserSearch