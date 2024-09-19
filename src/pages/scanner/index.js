import ScannerContainer from "@/containers/scanner/ScannerContainer";
import {useEffect, useState} from "react";
import InputScannerContainer from "@/containers/scanner/InputScannerContainer";
import {useRouter} from "next/router";

function Scanner() {
  const [hasScan, setHasScan] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query?.hasScan) {
      setHasScan(true)
    }
  }, [router.query])

  return (
    <>
      {hasScan && (
        <ScannerContainer />
      )}
      {!hasScan && (
        <InputScannerContainer
          onScan={() => setHasScan(true)}
        />
      )}
    </>
  );
}

export default Scanner;
