import React, { Fragment } from 'react'

function Account() {
    return (
        <Fragment>
            <div className='p-3'>
                <h2>My Account</h2>
                <hr />
                <div className='d-flex align-items-start flex-wrap'>
                    <div className='p-3 mw-fc shadow m-2'>
                        <div className='d-flex justify-content-center mb-3'>
                            <img className='account-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAM1BMVEXk5ueutLfKzc/n6eqrsbTh4+S6v8KorrK0uby9wsS3vL/d3+HO0tTa3d7U19nq7O3Dx8oi6WswAAADIklEQVR4nO2a627kIAyFQ2wChEB4/6ddkrk0nc0QzGC6W3F+VWqlfjq2cbAZhq6urq6urq6urq6urq5fK3j+AKk/42VYBx/MNOt5MqOD9SdIAFxAhShuQqX0KNfmEF6LB8JDKCbb1BFwsxInQgxDQ5BwCnED8Y04wOrXcHwDCW0o3F9J8cKhG/gB7m1AviS5QbIoUEtmCnsNsXHMzHZc5MWTI3ByQMijEEIx1i34jMS4izM9dDZFDAtXg4ExNyR7WLjsAAIEX5bCQjEjcvDYAYTM2DFGFjtsfpncpDkoaAm62+E4MGYiBU9UJJVCiInh6HDUmETVd4OeGiwlm9/VDhj1+9s6kSkELvUxyIXCUior8QzlwqBT/GY3SnKDIUVLKqV+wRadG/V7G/WjZ8dg+PD5N3pKQYdFw9BhgZyjDIVSkhxo61PEqFAxeO7T1KiwxCTKE+8pLBDkWxvPNWW70FPs4DIjitDe2MzYRk6E+QbjuCf/8xxZx9Yw53EopmJ9KK+zsHSToyCHAw37nBiuz3ScuCF2jquZOXdEHiAmVbe4tNoxwfLWENTsY/sDhwzqDARjV2265lplEC8kiHpsv32EwU/b/75LaONa7tkOIDC4ZQzGmDB6C623n18c60E/4AQASOv8Ep2Yd22GLM7J7TetEAY3mvmRFs/8vCdI8JJ9TR5N8EEfduInNauUMIvlMwUGuWy1kTrIn9bo0bLUDUCsz9Mz61wKp6U6CMhRUCf3Qilja1YxWJPIhoQQZ18rS2IDKYO4gUxVRj4wfACxS02fN13wmQvgpCMfvuqAwXwMsYNo9wHHWsGKu1T5Ja5k+PdWWLx5qxOQJ4cou8hlXtAIIPQEideR2hQlzxhk8hlRqcjTaxYKalyAiYI2v65aqS/Kr1vKoxWy8t9TWD4vRP4EBiZWjMz0oI0dSzDywlKw26NJZVRtyRaJqKyZFLsZORsO9szYMS7HUmv1vnrKceUGeXdThnHR4hok6I5xkaSc3eSbLjAa1MmmqweDjcy4+A4jv3QrVHrpE1s8tlE6R93YSEs6N6CR0hRdXV1dXf+j/gBDuydTlyyg3QAAAABJRU5ErkJggg==" alt="..."></img>
                        </div>
                        <p><span className='fw-bold'>Name:</span> Yagnik Gohil</p>
                        <p><span className='fw-bold'>Email:</span> gohilyagnik3@gmail.com</p>
                        <p className='m-0 fw-bold'>Shipping Address:</p>
                        <p className='m-0'>Street 1</p>
                        <p className='m-0'>City - PIN: 1234</p>
                        <p>State, Country</p>
                        <div className="d-flex flex-row-reverse">
                            <button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal2">Update</button>
                        </div>
                    </div>
                    <div className='p-3 mw-fc shadow m-2'>
                        <div>
                            <button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal3">Update Password</button>
                        </div>
                        <div>
                            <button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel2">Accoutnt Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='p-4'>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Name</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="text" name="name" className="form-control" />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Profile Picture</label>
                                </div>
                                <div className="col-md-2 col-sm-12">
                                    <img className="img-thumbnail mw-fc" alt="..."></img>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Shipping Address</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div>
                                        <input type="text" name="name" className="form-control" placeholder='Street'/>
                                    </div>
                                    <br></br>
                                    <div>
                                        <input type="text" name="name" className="form-control" placeholder="City - PIN"/>
                                    </div>
                                    <br></br>
                                    <div>
                                        <input type="text" name="name" className="form-control" placeholder="State, Country"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className='align-self-end'>
                                    <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel3">Update Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='p-4'>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Old Password</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="password" name="name" className="form-control" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">New Password</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="password" name="name" className="form-control" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Confirm New Password</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="password" name="name" className="form-control" />
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div className='align-self-end'>
                                    <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel4">Delete Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='p-4'>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Enter Password</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="password" name="name" className="form-control" />
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div className='align-self-end'>
                                    <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Delete Account</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Account