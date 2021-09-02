import React,{useEffect,useRef} from 'react'
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment'

const CreateForm = (
    { ime,
        setIme,
        prezime,
        setPrezime,
        jmbg,
        setJmbg,
        email,
        setEmail,
        values,
        setValues,
        handleSubmit,
        handleChange }


) => {

    const { datum, vreme } = values
    const format = 'HH:mm';
    const dateFormat = 'YYYY/MM/DD';
    useEffect(()=>{
        textInput.current.focus()
    },[])
    const textInput = useRef()
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-group' >

                    <div className='row' style={{backgroundColor: `#232f3e`}}>




                        <div className='col-md-6' >

                            <input
                            ref={textInput}
                                name='ime'
                                type='text'
                                placeholder='Ime'
                                className="form-control m-2"
                                value={ime}
                                onChange={(e) => { setIme(e.target.value) }}



                            />


                        </div>

                        <div className='col-md-6'>

                            <input
                                name='prezime'
                                type='text'
                                placeholder='Prezime'
                                className="form-control m-2"
                                onChange={(e) => { setPrezime(e.target.value) }}
                                value={prezime}
                            />


                        </div>
                        <div className='col-md-6'>

                            <input
                                name='jmbg'
                                type='number'
                                placeholder='jmbg'
                                className="form-control m-2"

                                onChange={(e) => { setJmbg(e.target.value) }}
                                value={jmbg}
                            />


                        </div>
                        <div className='col-md-6'>

                            <input
                                name='email'
                                type='email'
                                placeholder='Email'
                                className="form-control m-2"
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}

                            />


                        </div>
                        <br />
                        <div className='col-md-6'>
                            <DatePicker

                                //defaultValue={moment('2021/08/01', dateFormat)} format={dateFormat}
                                //value={datum}
                                onChange={(date, dateString) => setValues({ ...values, datum: dateString })}
                                placeholder='Izaberite datum'
                                className='form-control mt-2'
                                disabledDate={(current) => current && current.valueOf() < moment().subtract(1, 'days')}
                            //defaultValue={moment(datum,"YYYY-MM-DD")}
                            />
                        </div>

                        <div className='col-md-6'>

                            <TimePicker
                                //value={vreme}
                                defaultValue={moment('09:00', format)} format={format}
                                placeholder='Izaberite vreme'
                                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23]}
                                minuteStep={30}
                                className='form-control mt-2'
                                onChange={(time, timeString) => setValues({ ...values, vreme: timeString })}
                                name="vreme"
                            />

                        </div>

                        <div className='col-md-12'>
                            <button className='form-control mb-5 mt-5 btn btn-info' >ZAKAZI TERMIN</button>
                        </div>





                    </div>




                </div>



            </form>

        </>
    )
}

export default CreateForm
