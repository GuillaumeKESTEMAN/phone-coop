import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import {useEffect, useState} from "react";
import API from "../utils/api";

const QrReader = dynamic(
    //@ts-ignore
    () => import('react-qr-scanner'),
    { ssr: false }
)

const Terminal: NextPage = () => {
    let [resultOfScan, setResultOfScan] = useState(null);
    let [validQrCode, setValidQrCode] = useState(false);
    useEffect(() => {
        if(resultOfScan) {
            API.postTokenCheck({body: resultOfScan}).then((data) => {
                console.log(data);
                setValidQrCode(true);
            }).catch((err) => {
                console.log(err);
                setValidQrCode(false);
            });
        }
    }, [resultOfScan]);

    return (
        QrReader ?
            <div>
                {validQrCode ? (<p>Bravo, votre QR code est valide !</p>) : (<QrReader
                    {...({
                        onError:((err:Error) => {
                            console.log(err);
                        }) as any,
                        onScan:((result: any) => {
                        if(result && result.text) {
                        // setResultOfScan(API.postTokenCheck({body: {token: JSON.parse(result.text)}}));
                        setResultOfScan(JSON.parse(result.text));
                    }}) as any,
                    })as any}
                />)}
            </div> : null

    );
};

export default Terminal;
