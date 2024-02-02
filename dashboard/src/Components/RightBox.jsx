import React from "react";
import Navbar from "./Navbar";
import Emissions from "./Emissions";
import SideBar from "./SideBar";
import longsight from "../assets/Longsight 1.png"
import dropdown from "../assets/dropdown.png";
const RightBox = () => {
  return (
    <div className="relative w-full h-[1354px] text-left text-sm text-white font-helveticaneue">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1354px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(rgba(2,_171,_108,_0.04),_rgba(2,_171,_108,_0.04)),_#fff] w-[1440px] h-[1354px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1354px]">
            <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1354px]">
              <div className="absolute top-[225px] left-[232px] rounded-t-2xl rounded-b-none bg-white box-border w-[1202px] h-[1119px] border-[1px] border-solid border-whitesmoke" />
              <Navbar />
              <div className="absolute top-[1306px] left-[0px] w-[230px] flex flex-col items-start justify-start text-xs">
                <div className="relative box-border w-[241px] h-px border-t-[1px] border-solid border-mediumseagreen-200" />
                <div className="[background:linear-gradient(#02ab6c,_#02ab6c),_#fafbfc] w-[238px] h-12 flex flex-row items-center justify-center py-2 px-0 box-border gap-[8px]">
                  <div className="relative uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Powered by
                  </div>
                  <img
                    className="relative w-[116px] h-[25px] overflow-hidden shrink-0"
                    alt=""
                    src={longsight}
                  />
                </div>
              </div>
              <Emissions />
            </div>
          </div>
          <div className="absolute top-[223px] left-[238px] w-[1200px] h-[654px] text-3xs">
            <div className="absolute top-[0px] left-[24px] w-[580px] h-[654px]">
              <div className="absolute top-[731.5px] left-[-0.5px] box-border w-[460px] h-px opacity-[0] border-t-[1px] border-solid border-gray-200" />
              <div className="absolute top-[624px] left-[0px] rounded-xl bg-white box-border w-[459px] h-[471px] border-[1px] border-solid border-whitesmoke">
                <div className="absolute top-[143px] left-[20px] flex flex-row items-center justify-start">
                  <div />
                </div>
                <div className="absolute top-[58px] left-[20px] flex flex-row items-start justify-start gap-[20px]">
                  <div />
                  <div />
                </div>
                <div className="absolute top-[95px] left-[-51px] w-[503px] h-[307.48px]">
                  <div className="absolute top-[77px] left-[405px] rounded-[15px] bg-gainsboro-100 w-[98px] h-[49px]" />
                  <div className="absolute top-[0px] left-[0px] w-[487.86px] h-[307.48px] text-2xs">
                    <img
                      className="absolute top-[40.84px] left-[140.95px] w-[232.98px] h-[240.22px]"
                      alt=""
                      src="/group-625872.svg"
                    />
                    <img
                      className="absolute top-[108.27px] left-[365.62px] w-[39.83px] h-[7.22px]"
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className="absolute top-[219.42px] left-[0px] w-[66.86px] h-[41.86px]" />
                    <div className="absolute top-[75.07px] left-[38.41px] w-[68.29px] h-[40.42px]" />
                    <div className="absolute top-[17.32px] left-[95.32px] w-[68.29px] h-[41.86px]" />
                    <div className="absolute top-[86px] left-[421px] w-[66.86px] h-[40.42px] flex flex-col items-center justify-start gap-[2px]">
                      <div className="relative leading-[16px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_0.8)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Adani
                      </div>
                      <div className="relative text-4xs leading-[16px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        17645 C02e
                      </div>
                    </div>
                    <div className="absolute top-[267.06px] left-[321.52px] w-[66.86px] h-[40.42px]" />
                    <div className="absolute top-[0px] left-[280.26px] w-[66.86px] h-[40.42px]" />
                  </div>
                  <div className="absolute top-[177.56px] left-[160.76px] font-medium inline-block w-[31.3px] h-[17.32px]">
                    12%
                  </div>
                  <div className="absolute top-[235.3px] left-[241.85px] font-medium inline-block w-[31.3px] h-[17.32px]">
                    18%
                  </div>
                  <div className="absolute top-[158.79px] left-[321.52px] font-medium inline-block w-[31.3px] h-[17.32px]">
                    23%
                  </div>
                  <div className="absolute top-[103.94px] left-[166.45px] font-medium inline-block w-[31.3px] h-[17.32px]">
                    12%
                  </div>
                  <div className="absolute top-[75.07px] left-[200.59px] font-medium inline-block w-[31.3px] h-[17.32px]">
                    12%
                  </div>
                  <div className="absolute top-[59.19px] left-[234.74px] font-medium inline-block w-[22.76px] h-[17.32px]">
                    2%
                  </div>
                  <img
                    className="absolute top-[142.91px] left-[341.44px] w-[32.72px] h-[24.54px] object-cover"
                    alt=""
                    src="/cursor@2x.png"
                  />
                </div>
                <div className="absolute top-[12px] left-[0px] w-[459px] h-16 flex flex-row items-center justify-between p-5 box-border text-sm">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Emission by Supplier
                  </div>
                  <div className="rounded-xl bg-white shadow-[0px_8px_80px_rgba(0,_0,_0,_0.04),_0px_2px_16px_rgba(0,_0,_0,_0.02),_0px_0.5px_4px_rgba(0,_0,_0,_0.02)] box-border h-9 flex flex-row items-center justify-center py-1.5 px-1 gap-[2px] border-[1px] border-solid border-whitesmoke">
                    <div className="overflow-hidden flex flex-row items-start justify-start p-1.5">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="overflow-hidden flex flex-col items-start justify-start py-3 px-1.5">
                      <img
                        className="relative w-4 h-1"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[419px] left-[53px] flex flex-row items-start justify-start gap-[20px] text-center text-xs text-gray-700">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-2xl bg-cornflowerblue w-3 h-3" />
                    <div className="relative leading-[18px] font-medium">
                      Adani
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-2xl bg-darkslateblue w-3 h-3" />
                    <div className="relative leading-[18px] font-medium">
                      Reliance
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-2xl bg-gold-100 w-3 h-3" />
                    <div className="relative leading-[18px] font-medium">
                      Rezicure
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-2xl bg-mediumseagreen-100 w-3 h-3" />
                    <div className="relative leading-[18px] font-medium">{`Ruzzet `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[107px] left-[4px] w-[1200px] h-[482px]" />
            <div className="absolute top-[87px] left-[26px] rounded-xl bg-white shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] box-border w-[1005px] h-[521px] overflow-hidden text-sm border-[1px] border-solid border-whitesmoke">
              <div className="absolute top-[0px] left-[0px] w-[564px] h-16 flex flex-row items-center justify-between p-5 box-border">
                <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Emission/Revenue
                </div>
                <img
                  className="relative w-5 h-5 opacity-[0]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="absolute top-[63.5px] left-[-0.5px] box-border w-[565px] h-px opacity-[0] border-t-[1px] border-solid border-whitesmoke" />
              <div className="absolute top-[64px] left-[0px] w-[564px] h-[336.33px]" />
              <img
                className="absolute top-[64px] left-[20px] w-[946px] h-[447px] object-cover"
                alt=""
                src="/mixlinebar-1@2x.png"
              />
            </div>
            <div className="absolute top-[620px] left-[516px] rounded-t-xl rounded-b-none bg-white box-border w-[643px] h-12 text-xs border-[1px] border-solid border-whitesmoke">
              <div className="absolute top-[0px] left-[121px] w-[1015px] h-12">
                <div className="absolute top-[0px] left-[894px] h-12 flex flex-row items-center justify-center py-2.5 px-0 box-border">
                  <div className="relative box-border w-px h-[25px] border-r-[1px] border-solid border-whitesmoke" />
                </div>
                <div className="absolute top-[8px] left-[906px] rounded-lg bg-white shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] flex flex-row items-center justify-start border-[1px] border-solid border-mediumseagreen-500">
                  <div className="w-8 h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[9px] px-2 box-border">
                    <img
                      className="relative w-[12.8px] h-4"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-mediumseagreen-500" />
                  <div className="h-8 flex flex-row items-center justify-center p-2.5 box-border">
                    <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Download
                    </div>
                  </div>
                </div>
                <div className="absolute top-[17px] left-[734px] w-[11px] h-[13px]">
                  <div className="absolute top-[0px] left-[0px] w-[11px] h-[13px] overflow-hidden" />
                </div>
                <img
                  className="absolute h-[39.58%] w-[2.07%] top-[31.25%] right-[97.93%] bottom-[29.17%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="absolute top-[15px] left-[17px] text-base font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Supplier-wise
              </div>
              <div className="absolute top-[12px] left-[521px] rounded-lg bg-white shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] box-border w-[111.65px] h-[27px] flex flex-row items-center justify-start text-2xs border-[1px] border-solid border-mediumseagreen-500">
                <div className="w-8 h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[9px] px-2 box-border">
                  <img
                    className="relative w-[9.8px] h-3"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-mediumseagreen-500" />
                <div className="h-5 flex flex-row items-center justify-center pt-2 px-2.5 pb-2.5 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[159px] left-[1145px] rounded-xl bg-mediumseagreen-600 shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] overflow-hidden flex flex-col items-start justify-start text-gray-500 border-[1px] border-solid border-whitesmoke">
            <div className="h-16 flex flex-row items-center justify-start p-5 box-border">
              <div className="relative leading-[18px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.84),_rgba(255,_255,_255,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                <p className="m-0">Total number of</p>
                <p className="m-0">reached suppliers</p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-5 pb-5 text-center text-[46px]">
              <div className="relative font-medium">143</div>
            </div>
          </div>
          {/* <div className="absolute top-[163px] left-[832px] rounded-xl bg-white shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] box-border w-[267px] h-[134px] overflow-hidden text-gray-600 border-[1px] border-solid border-whitesmoke">
            <div className="absolute top-[0px] left-[0px] w-[400px] h-16">
              <div className="absolute top-[24px] left-[20px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_0.8)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Purchased goods and Services
              </div>
              <img
                className="absolute top-[26px] left-[222px] w-3.5 h-3.5 overflow-hidden"
                alt=""
                src="/mingcuteinformationline.svg"
              />
              <i className="absolute top-[43px] left-[20px] text-5xs flex font-extralight font-poppins text-center items-center justify-center w-[90px] h-1">
                contribution to Scope3
              </i>
            </div>
            <div className="absolute top-[63.5px] left-[-0.5px] box-border w-[321px] h-px opacity-[0] border-t-[1px] border-solid border-whitesmoke" />
            <div className="absolute top-[64px] left-[0px] w-80 h-[76px] text-center text-mini text-firebrick">
              <div className="absolute top-[0px] left-[20px] rounded-lg [background:linear-gradient(rgba(224,_48,_33,_0.04),_rgba(224,_48,_33,_0.04)),_#fff] box-border w-[219px] h-11 border-[1px] border-solid border-tomato-200">
                <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[280px] h-11 border-l-[6px] border-solid border-tomato-100">
                  <div className="absolute top-[13px] left-[21px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_0.8)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    441510.9 CO2e
                  </div>
                  <div className="absolute top-[9px] left-[140px] w-[77px] h-7 text-2xs">
                    <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[77px] h-7">
                      25%YOY↑
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="absolute top-[788px] left-[754px] w-[643px] h-[540.1px]">
            <div className="absolute top-[140px] left-[0px] shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] w-[643px] h-[400.1px] flex flex-col items-start justify-start">
              <div className="self-stretch bg-white flex flex-row items-start justify-start border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jan
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    1790
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    137.3
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(#008c58,_#008c58),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    15%↓
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Feb
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2205
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    99.8
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(#008c58,_#008c58),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>3%</span>
                    <span className="text-base">↓</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mar
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2345
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    122.6
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>12%</span>
                    <span className="text-base">↓</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Apr
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    1503
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    130.0
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>16%</span>
                    <span className="text-base">↓</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    May
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4634
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    124.2
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>-8%</span>
                    <span className="text-base">↑</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jun
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4634
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    124.2
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>-13%</span>
                    <span className="text-base">↑</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
              <div className="self-stretch bg-white flex flex-row items-start justify-start mt-[-1px] border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jul
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    3487
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    165.1
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
                <div className="flex-1 h-14 flex flex-row items-center justify-center py-2 px-4 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <span>26%</span>
                    <span className="text-base">↓</span>
                  </div>
                </div>
                <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-whitesmoke" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[569.53px] w-0 h-[34.85px]" />
            <div className="absolute top-[12.34px] left-[480.23px] w-[6.14px] h-[9.44px]">
              <div className="absolute top-[0px] left-[0px] w-[6.14px] h-[9.44px] overflow-hidden" />
            </div>
          </div>
          <div className="absolute top-[890px] left-[754px] bg-gray-100 box-border w-[643px] h-[37.76px] text-3xs border-[1px] border-solid border-whitesmoke">
            <div className="absolute top-[-0.5px] left-[160.5px] box-border w-px h-[39.01px] border-r-[1px] border-solid border-whitesmoke" />
            <div className="absolute top-[-0.5px] left-[321.5px] box-border w-px h-[39.01px] border-r-[1px] border-solid border-whitesmoke" />
            <div className="absolute top-[-0.5px] left-[481.5px] box-border w-px h-[39.01px] border-r-[1px] border-solid border-whitesmoke" />
            <div className="absolute top-[0px] left-[0px] w-[161px] h-[38px] flex flex-row items-center justify-center py-2 px-4 box-border">
              <div className="relative uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.48),_rgba(0,_0,_0,_0.48)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Month
              </div>
            </div>
            <div className="absolute top-[0px] left-[161px] w-[158px] h-[38px] flex flex-row items-center justify-center py-2 px-4 box-border">
              <div className="relative uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.48),_rgba(0,_0,_0,_0.48)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                emissions(in CO2e)
              </div>
            </div>
            <div className="absolute top-[0px] left-[331px] w-[147px] h-[38px] flex flex-row items-center justify-center py-2 px-4 box-border">
              <div className="relative uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.48),_rgba(0,_0,_0,_0.48)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                REVENUE/EMISSION RATIO
              </div>
            </div>
            <div className="absolute top-[0px] left-[482px] w-[158px] h-[38px] flex flex-row items-center justify-center py-2 px-4 box-border">
              <div className="relative uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.48),_rgba(0,_0,_0,_0.48)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                YOY R/E Change
              </div>
            </div>
            <div className="absolute top-[26px] left-[954px] text-xs uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.48),_rgba(0,_0,_0,_0.48)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              MOM(YEAR WISE)
            </div>
            <div className="absolute top-[-0.5px] left-[863.5px] box-border w-px h-[53px] border-r-[1px] border-solid border-whitesmoke" />
          </div>
          <SideBar />
          <div className="absolute top-[1019px] left-[1406px] bg-gainsboro-200 w-1.5 h-32" />
        </div>
      </div>
      <div className="absolute top-[88px] left-[1135px] rounded-lg bg-white shadow-[0px_9px_80px_rgba(0,_0,_0,_0.02),_0px_2.010267734527588px_17.87px_rgba(0,_0,_0,_0.01),_0px_0.5985091924667358px_5.32px_rgba(0,_0,_0,_0.01)] box-border w-[226px] h-8 text-xs text-gray-700 border-[1px] border-solid border-mediumseagreen-200">
        <div className="absolute top-[0px] left-[0px] h-8 flex flex-row items-center justify-center py-2.5 px-3 box-border gap-[10px]">
          <div className="relative font-medium">
            <span>{`Show Timeline: `}</span>
            <span className="text-mediumseagreen-200">Jan’22 - Dec’23</span>
          </div>
          <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-mediumseagreen-200" />
          <img
            className="relative w-[9px] h-[11px]"
            alt=""
            src={dropdown}
          />
        </div>
        <div className="absolute top-[0px] left-[222px] w-8 h-8 overflow-hidden" />
      </div>
    </div>
  );
};

export default RightBox;
