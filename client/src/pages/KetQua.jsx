import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const KetQua = () => {
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
}
const [form, setForm] = useState({
    cccd: '',
    numberPlate: '',
    yaerManufac: '',
    lifetimeLimit: '',
    insepectionReportN: '',
    insepectionValidUntil: '',
    typeOf: '',
    mark: '',
    modelCode: '',
    chassicNum: '',
})
const navigate = useNavigate()
const handleSubmit = async (e) => {
    e.preventDefault()
    setForm({ ...form })
}
    return (
        <div className="login-container">
            <div className="image-tracuu">
                <img
                    className="image-logo-tracuu"
                    src="https://static.automotor.vn/images/upload/2022/06/17/kia-sonet-autonews.jpg"
                    alt="kia"
                />
                <img
                    className="image-logo-tracuu"
                    src="https://www.toyota.com.vn/media/5vaj5bks/toyota-7-cho-1.jpeg?width=772&height=513&mode=max"
                    alt="kia"
                />
                <img
                    className="image-logo-tracuu"
                    src="https://vcdn-vnexpress.vnecdn.net/2022/04/21/BMW-i7-1-2574-1650510542.jpg"
                    alt="kia"
                />
            </div>
            <form onSubmit={handleSubmit} className="formStyle">
                <div className="input-flex">
                    <div className="single-input">
                        <div>
                            <h6 className="input-text">Chủ xe : </h6>
                            <input
                                value={form.cccd}
                                type={Text}
                                step="0.1"
                                placeholder={'Write your căn cước'}
                                onChange={(e) =>
                                    handleFormFieldChange('cccd', e)
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Nhập biển số xe: </h6>
                            <input
                                value={form.numberPlate}
                                type={Text}
                                step="0.1"
                                placeholder={'Biển số xe'}
                                onChange={(e) =>
                                    handleFormFieldChange('numberPlate', e)
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Năm sản xuất: </h6>
                            <input
                                className="input_form"
                                value={form.yaerManufac}
                                type={Text}
                                step="0.1"
                                placeholder={'Năm sản xuất'}
                                onChange={(e) =>
                                    handleFormFieldChange('yaerManufac', e)
                                }
                            />
                        </div>
                    </div>
                    <div className="single-input">
                        <div>
                            <h6 className="input-text">Niêm hạn sử dụng: </h6>
                            <input
                                value={form.lifetimeLimit}
                                type={Text}
                                step="0.1"
                                placeholder={'Niêm hạn sử dụng'}
                                onChange={(e) =>
                                    handleFormFieldChange('lifetimeLimit', e)
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Số phiếu kiểm định: </h6>
                            <input
                                value={form.insepectionReportN}
                                type={Text}
                                step="0.1"
                                placeholder={'Số phiểu kiểm định'}
                                onChange={(e) =>
                                    handleFormFieldChange(
                                        'insepectionReportN',
                                        e
                                    )
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Hiệu lực đến năm: </h6>
                            <input
                                value={form.insepectionValidUntil}
                                type={Text}
                                step="0.1"
                                placeholder={'Đến năm mấy'}
                                onChange={(e) =>
                                    handleFormFieldChange(
                                        'insepectionValidUntil',
                                        e
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="single-input">
                        <div>
                            <h6 className="input-text">Loại phương tiện: </h6>
                            <input
                                value={form.typeOf}
                                type={Text}
                                step="0.1"
                                placeholder={'Phương tiện nào'}
                                onChange={(e) =>
                                    handleFormFieldChange('typeOf', e)
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Nhãn hiệu xe: </h6>
                            <input
                                value={form.mark}
                                type={Text}
                                step="0.1"
                                placeholder={'Nhãn hiệu'}
                                onChange={(e) =>
                                    handleFormFieldChange('mark', e)
                                }
                            />
                        </div>
                        <div className="single-input">
                            <h6 className="input-text">Mã loại xe: </h6>
                            <input
                                value={form.modelCode}
                                type={Text}
                                step="0.1"
                                placeholder={'Số loại'}
                                onChange={(e) =>
                                    handleFormFieldChange('modelCode', e)
                                }
                            />
                        </div>
                    </div>
                    <div className="single-input">
                        <h6 className="input-text">Số khung xe: </h6>
                        <input
                            value={form.chassicNum}
                            type={Text}
                            step="0.1"
                            placeholder={'Số khung'}
                            onChange={(e) =>
                                handleFormFieldChange('chassicNum', e)
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default KetQua
