import React, { Fragment, useEffect, useState } from "react";

// TOAST
import cogoToast from "cogo-toast";
import { ThreeDots } from "react-loader-spinner";

// ETHERS
import { BigNumber, ethers } from "ethers";

// HOOKS
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction
} from "wagmi";

// COMPONENTS
import { AppProgress, TextBox } from "@/components/forms";

// CONTRACT
import { presaleContractABI, BEP40TokenABI } from "@/contracts";

// SERVICES
import { $number } from "@/services";

const AccountSection = () => {
  const { address } = useAccount();

  // STATE
  const [amount, setAmount] = useState<number>(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const { data: balanceOf } = useContractRead({
    abi: BEP40TokenABI,
    address: import.meta.env.VITE_APP_USDT_SMART_CONTRACT_ADDR,
    functionName: "balanceOf",
    args: [address ?? "0x0"]
  });

  const { data: symbol } = useContractRead({
    abi: BEP40TokenABI,
    address: import.meta.env.VITE_APP_USDT_SMART_CONTRACT_ADDR,
    functionName: "symbol"
  });

  const { data: raisedBNB } = useContractRead({
    abi: presaleContractABI,
    address: import.meta.env.VITE_APP_PRESALE_SMART_CONTRACT_ADDR,
    functionName: "raisedBNB"
  });

  const { data: hardCap } = useContractRead({
    abi: presaleContractABI,
    address: import.meta.env.VITE_APP_PRESALE_SMART_CONTRACT_ADDR,
    functionName: "hardCap"
  });

  const _balanceOf =
    balanceOf && $number.convertToNumber((balanceOf as any)._hex ?? BigNumber.from(0));

  const _raisedBnb: BigNumber = raisedBNB ? (raisedBNB as BigNumber) : BigNumber.from(0);
  const _hardCap: BigNumber = hardCap ? (hardCap as BigNumber) : BigNumber.from(0);

  const percentage: number =
    (Number(ethers.utils.formatUnits(_raisedBnb)) /
      Number(ethers.utils.formatUnits(_hardCap))) *
    100;

  const toastConfig: any = {
    position: "top-right"
  };

  const {
    data: buyData,
    error: buyError,
    isLoading: isBuying,
    write: buy
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: import.meta.env.VITE_APP_PRESALE_SMART_CONTRACT_ADDR,
    abi: presaleContractABI,
    functionName: "buy",
    overrides: {
      value: ethers.utils.parseEther(amount.toString() || "0")
    },

    onError(error: any) {
      cogoToast.error(`Failed! ${error?.reason}`, toastConfig);
    }
  });

  const { isLoading: isWaitingToBuy } = useWaitForTransaction({
    hash: buyData?.hash,
    onSuccess(data: any) {
      setAmount(0);
      cogoToast.success("Successful!", toastConfig);
    },
    onError(error: any) {
      cogoToast.error(`Failed! ${error.reason}`, toastConfig);
    }
  });

  const handleBuy = (): void => {
    buy?.();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <section className="acct-section">
        <div className="acct-section__badge">
          Your bal: {`${_balanceOf ?? 0.0} ${symbol ?? "USDT"}`}
        </div>

        <div className="acct-section__card">
          <div className="acct-section__card-header">
            <div className="acct-section__card-heading">{time}</div>

            <div className="acct-section__card-badge">Pending</div>
          </div>

          <div className="acct-section__card-body">
            <div className="progress-section__title">Sale Progress</div>

            <div className="progress-section__container">
              <AppProgress percent={percentage ?? 0} />
            </div>

            <div className="card-form">
              <label htmlFor="amountValue" className="card-form__label">
                Enter amount to buy
              </label>

              <div className="card-form__panel">
                <TextBox
                  isBuying={isBuying}
                  isWaitingToBuy={isWaitingToBuy}
                  setAmount={setAmount}
                />

                <button
                  disabled={isBuying || isWaitingToBuy}
                  onClick={handleBuy}
                  type={"button"}
                  className="card-form__btn"
                >
                  {!isBuying || !isWaitingToBuy ? (
                    "Buy"
                  ) : (
                    <ThreeDots
                      height="30"
                      width="30"
                      color="#E8F2FF"
                      ariaLabel="three-dots-loading"
                    />
                  )}
                </button>
              </div>

              <div className="card-form__desc">
                <div className="card-form__copy">
                  Min. Buy: <span>30 USDT</span>
                </div>

                <div className="card-form__copy">
                  Max. Buy: <span>10,000 USDT</span>
                </div>
              </div>

              <div className="card-form__footer">
                <div className="card-form__footer-heading">Disclaimer:</div>

                <div className="card-form__footer-copy">
                  The information provided shall not in any way constitute a
                  recommendation as to whether you should invest in any product discussed.{" "}
                  <span>We accept no liability for any loss.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export { AccountSection as default };
