import React from 'react';


export const FormBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Form Billing Pasien </h2>
            <input type="hidden" name="id" value={props.billing.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.billing.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan"/>
            </div>
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan"/>
            </div>
            {/* <div className="form-group">
                <label>Poli Rujukan</label>
                <select className="form-control" name="poliRujukan.id" defaultValue={!props.pasien.poliRujukan ? "" : props.pasien.poliRujukan.id}>
                    <option value="">Pilih poli rujukan</option>
                    {Object.keys(poliRujukan).map(key => {
                        return (
                            <option key={key} value={key}>{poliRujukan[key]}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label>Status Pasien<span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" name="statusPasien.id" defaultValue={!props.pasien.statusPasien ? "" : props.pasien.statusPasien.id} required>
                    <option value="" disabled>Pilih status pasien</option>
                    {Object.keys(statusPasien).map(key => {
                        return (
                            <option key={key} value={key}>{statusPasien[key]}</option>
                        )
                    })}
                </select>
            </div> */}
            <button className="btn btn-success" value="submit">Tambah</button>
        </form>
    )
}