import React, { useState, useEffect } from 'react';
import './location.css';

const Convert = () => {
  return (
    <>
    <div className="location">
        <div className="tulisanawal">
            Find exchange Locations
        </div>
        <div className="daftarkota">
            <div className="surabaya">
                <div className="namakota">
                    Surabaya
                </div>
                <div className="alamat">
                    Rukan, Ruko Golden Palace, Jl. Mayjen HR. Muhammad No.373 A-17, Pradahkalikendal, Dukuhpakis, Surabaya, East Java 60226
                </div>
                <a 
                    href="https://maps.app.goo.gl/ZJd6pUUG1qCgch3w6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    location
                </a>
            </div>
            <div className="surabaya">
                <div className="namakota">
                        Jakarta
                    </div>
                    <div className="alamat">
                        Jl. Gajah Mada No.153, Keagungan, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11130
                    </div>
                    <a 
                    href="https://maps.app.goo.gl/Z4KK2JG6nfjgRi9M9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    location
                </a>
            </div>
            <div className="surabaya">
                <div className="namakota">
                        Malang
                    </div>
                    <div className="alamat">
                        Malang Town Square, Jl. Veteran Lantai Ground, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65145
                    </div>
                    <a 
                    href="https://maps.app.goo.gl/YWfiafihHsV9fxkE9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    location
                </a>
                </div>
            <div className="surabaya">
                <div className="namakota">
                        Tulungagung
                    </div>
                    <div className="alamat">
                        Jl. Dr. Sutomo No.1, Tertek, Kec. Tulungagung, Kabupaten Tulungagung, Jawa Timur 66216
                    </div>
                    <a 
                    href="https://maps.app.goo.gl/fW79hfdHGAr9HV7R6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    location
                </a>
            </div>
            <div className="surabaya">
                <div className="namakota">
                        Sidoarjo
                    </div>
                    <div className="alamat">
                        Jl. Raya Ngelom No.63, RT.01/RW.03, Ngelom, Kec. Taman, Kabupaten Sidoarjo, Jawa Timur 61257
                    </div>
                    <a 
                    href="https://maps.app.goo.gl/1FRE5YiWjPVUaxVP6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    location
                </a>
            </div>
        </div>

    </div>
    </>
  );
};

export default Convert;
