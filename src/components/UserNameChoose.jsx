import React, { useContext } from "react";
import Loader from "./Loader";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { UserContext } from "@/context/userContext";

const UserNameChoose = () => {
  const {
    setUsername,
    UserNameAvailablity,
    available,
    username,
    loading,
    handleSubmit,
    userPannel,
  } = useContext(UserContext);
  return (
    <>
      {userPannel ? (
        <div
          className={`w-[100%] h-[100%] relative overflow-hidden flex flex-col primaryBackground justify-start  items-center rounded-[16px] px-[24px] p-[2px] overflow-y-scroll`}
        >
          <div className="w-[400px] h-[250px] overflow-hidden flex flex-col primaryBackgroun justify-start items-center rounded-[16px] mt-6 py-0">
            <div className="overflow-x-hidden w-[100%]  flex flex-col  items-center ">
              <div className=" w-[100%] flex  items-center align-center flex-col">
                <p className="primaryFont sfMedium text-[16px] self-start leading-8 text-center m-2">
                  Define your username
                </p>
              </div>

              <div
                style={{
                  borderWidth: username !== "" ? 1 : 0,
                  borderColor: !available ? "#DE3151" : "#19C84D",
                }}
                className={`w-[100%] h-[52px] self-center ${
                  username !== "" ? "pr-2" : "primaryGradient"
                } rounded-[16px] primaryBackground flex justify-between flex-row items-center p-[1px]`}
              >
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                    UserNameAvailablity(e.target.value);
                  }}
                  placeholder="Enter your username"
                  className={
                    "w-[100%] primaryFont sfRegular h-[100%]  rounded-[16px] primaryBackground py-2 pl-4"
                  }
                />
                {username !== "" && available && (
                  <AiOutlineCheckCircle
                    size={20}
                    color={"#19C84D"}
                    className={""}
                  />
                )}
                {username !== "" && !available && (
                  <AiOutlineCloseCircle
                    size={20}
                    color={"#DE3151"}
                    className={""}
                  />
                )}
              </div>
              <div className="w-[100%]">
                {username === "" && !available && (
                  <p className=" sfRegular text-[12px] my-[4px] primaryFont opacity-40 text-left self-start ml-4">
                    Create a unique username to continue.
                  </p>
                )}
                {username !== "" && available && (
                  <p
                    style={{ color: "#19C84D" }}
                    className=" sfRegular text-[12px] italic my-[4px] text-left self-start ml-4"
                  >
                    Look&apos;s good, LFG ⚡️
                  </p>
                )}
                {username !== "" && !available && (
                  <p
                    style={{ color: "#DE3151" }}
                    className=" sfRegular text-[12px] my-[4px] text-left self-start ml-4"
                  >
                    Username not available.
                  </p>
                )}
              </div>
              {!loading ? (
                <>
                  {username != "" && available ? (
                    <button
                      onClick={() => handleSubmit()}
                      className="buttonGradient cursor-pointer mt-[32px]"
                    >
                      {" "}
                      <p className="sfBold text-[18px] text-[white]">
                        Get Started
                      </p>
                    </button>
                  ) : (
                    <button className="buttonGradientInActive cursor-pointer mt-8">
                      <p className="sfBold text-[18px] primaryFont opacity-60">
                        Continue
                      </p>
                    </button>
                  )}
                </>
              ) : (
                <div className="w-[100%] h-[50px] flex items-center justify-center mb-4">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserNameChoose;
