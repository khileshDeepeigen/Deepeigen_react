
import { useState } from 'react';
import PurchasedCourseModal from './UI/PurchasedCourseModal';
import BasicPlanModal from './UI/BasicPlanModal';
import CustomPlanModal from './UI/CustomPlanModal';
import CancelModal from './UI/CancelModal';
import ReminderSwiperCard from './UI/ReminderSwiperCard';


export default function BillingAndInvoices() {



  const [basicModal, setBasicModal] = useState(false)
  const [customModal, setCustomModal] = useState(false)
  const [purchasedModel, setPurchasedModel] = useState(false)

  const [cancelModal, setCancelModal] = useState(false)

  return (
    <div className="flex flex-col gap-10 px-10 py-7 flex-1">

      <div className="w-full flex justify-center">
        <ReminderSwiperCard />
      </div>

      <div className="flex flex-col justify-center items-start gap-8 self-stretch">
        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <h3 className="text-[rgba(26,33,47,0.7)] font-bricolage text-lg font-semibold tracking-[-0.18px]">
            Subscription plan
          </h3>
          <div className="flex flex-col justify-center items-start gap-[21px] self-stretch rounded-xl px-7 py-6 bg-gradient-to-r from-[#E5F4FF] to-[#F8FBFF]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-[#1A212F] font-bricolage text-xl font-normal">Basic Plan</span>
                <span className="text-[#174CD2] font-bricolage text-lg font-semibold tracking-[-0.18px]">$15/Month</span>
              </div>
              <button className="flex px-4 py-2 cursor-pointer justify-center items-center gap-2.5 rounded-[90px] border border-[#174CD2] text-[#174CD2] font-bricolage text-base font-semibold leading-[93%]">
                Upgrade
              </button>
            </div>
            <div className="h-px self-stretch bg-[rgba(0,0,0,0.08)]" />
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.0026 1.83325C6.3671 1.83325 4.79859 2.48295 3.64211 3.63943C2.48564 4.7959 1.83594 6.36442 1.83594 7.99992C1.83594 9.63542 2.48564 11.2039 3.64211 12.3604C4.79859 13.5169 6.3671 14.1666 8.0026 14.1666C9.63811 14.1666 11.2066 13.5169 12.3631 12.3604C13.5196 11.2039 14.1693 9.63542 14.1693 7.99992C14.1693 6.36442 13.5196 4.7959 12.3631 3.63943C11.2066 2.48295 9.63811 1.83325 8.0026 1.83325ZM0.835938 7.99992C0.835938 4.04192 4.0446 0.833252 8.0026 0.833252C11.9606 0.833252 15.1693 4.04192 15.1693 7.99992C15.1693 11.9579 11.9606 15.1666 8.0026 15.1666C4.0446 15.1666 0.835938 11.9579 0.835938 7.99992ZM8.0026 4.83325C8.13521 4.83325 8.26239 4.88593 8.35616 4.9797C8.44993 5.07347 8.5026 5.20064 8.5026 5.33325V7.79325L10.0226 9.31325C10.0717 9.35903 10.1111 9.41423 10.1385 9.47556C10.1658 9.53689 10.1805 9.6031 10.1817 9.67024C10.1828 9.73737 10.1705 9.80406 10.1454 9.86632C10.1202 9.92858 10.0828 9.98513 10.0353 10.0326C9.98782 10.0801 9.93126 10.1175 9.869 10.1427C9.80674 10.1678 9.74006 10.1802 9.67292 10.179C9.60579 10.1778 9.53958 10.1631 9.47825 10.1358C9.41691 10.1084 9.36171 10.069 9.31594 10.0199L7.64927 8.35325C7.55548 8.25957 7.50272 8.13248 7.5026 7.99992V5.33325C7.5026 5.20064 7.55528 5.07347 7.64905 4.9797C7.74282 4.88593 7.87 4.83325 8.0026 4.83325Z" fill="#1A212F" fillOpacity="0.7" />
                </svg>
                <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                  Expires on 21 July 2026
                </span>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setBasicModal(true)}
                  className="text-[rgba(26,33,47,0.7)] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px] underline">
                  View Payment History
                </button>
                <button className="text-[rgba(26,33,47,0.7)] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px] underline">
                  View Courses
                </button>
                <button
                  onClick={() => setCancelModal(true)}
                  className="text-[#CE2823] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px]">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <h3 className="text-[rgba(26,33,47,0.7)] font-bricolage text-lg font-semibold tracking-[-0.18px]">
            Custom  plan
          </h3>
          <div className="flex flex-col justify-center items-start gap-[21px] self-stretch rounded-xl px-7 py-6 bg-gradient-to-r from-[#E5F4FF] to-[#F8FBFF]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[#1A212F] font-bricolage text-xl font-normal">43 Lectures</span>
                  <div className="w-px h-6 bg-[rgba(26,33,47,0.24)]" />
                  <span className="text-[#1A212F] font-bricolage text-xl font-normal">3 Assignments</span>
                </div>
                <span className="text-[#174CD2] font-bricolage text-lg font-semibold tracking-[-0.18px]">$25/Month</span>
              </div>
              <button className="flex px-4 py-2 cursor-pointer justify-center items-center gap-2.5 rounded-[90px] border border-[#174CD2] text-[#174CD2] font-bricolage text-base font-semibold leading-[93%]">
                Add Lectures
              </button>
            </div>
            <div className="h-px self-stretch bg-[rgba(0,0,0,0.08)]" />
            <div className="flex justify-between items-start self-stretch">
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.0026 1.83325C6.3671 1.83325 4.79859 2.48295 3.64211 3.63943C2.48564 4.7959 1.83594 6.36442 1.83594 7.99992C1.83594 9.63542 2.48564 11.2039 3.64211 12.3604C4.79859 13.5169 6.3671 14.1666 8.0026 14.1666C9.63811 14.1666 11.2066 13.5169 12.3631 12.3604C13.5196 11.2039 14.1693 9.63542 14.1693 7.99992C14.1693 6.36442 13.5196 4.7959 12.3631 3.63943C11.2066 2.48295 9.63811 1.83325 8.0026 1.83325ZM0.835938 7.99992C0.835938 4.04192 4.0446 0.833252 8.0026 0.833252C11.9606 0.833252 15.1693 4.04192 15.1693 7.99992C15.1693 11.9579 11.9606 15.1666 8.0026 15.1666C4.0446 15.1666 0.835938 11.9579 0.835938 7.99992ZM8.0026 4.83325C8.13521 4.83325 8.26239 4.88593 8.35616 4.9797C8.44993 5.07347 8.5026 5.20064 8.5026 5.33325V7.79325L10.0226 9.31325C10.0717 9.35903 10.1111 9.41423 10.1385 9.47556C10.1658 9.53689 10.1805 9.6031 10.1817 9.67024C10.1828 9.73737 10.1705 9.80406 10.1454 9.86632C10.1202 9.92858 10.0828 9.98513 10.0353 10.0326C9.98782 10.0801 9.93126 10.1175 9.869 10.1427C9.80674 10.1678 9.74006 10.1802 9.67292 10.179C9.60579 10.1778 9.53958 10.1631 9.47825 10.1358C9.41691 10.1084 9.36171 10.069 9.31594 10.0199L7.64927 8.35325C7.55548 8.25957 7.50272 8.13248 7.5026 7.99992V5.33325C7.5026 5.20064 7.55528 5.07347 7.64905 4.9797C7.74282 4.88593 7.87 4.83325 8.0026 4.83325Z" fill="#1A212F" fillOpacity="0.7" />
                </svg>
                <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                  Expires on 21 July 2026
                </span>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setCustomModal(true)}
                  className="text-[rgba(26,33,47,0.7)] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px] underline">
                  View Payment History
                </button>
                <button className="text-[rgba(26,33,47,0.7)] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px] underline">
                  View Lectures
                </button>
                <button
                  onClick={() => setCancelModal(true)}
                  className="text-[#CE2823] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px]">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <h3 className="text-[rgba(26,33,47,0.7)] font-bricolage text-lg font-semibold tracking-[-0.18px]">
            Purchased courses
          </h3>
          <div className="flex flex-col justify-center items-start gap-[21px] self-stretch rounded-xl px-7 py-6 bg-gradient-to-r from-[#E5F4FF] to-[#F8FBFF]">
            <div className="flex items-center gap-4 self-stretch">
              <div className="flex px-[30px] py-[26px] justify-center items-center rounded-md bg-gradient-to-b from-[#000155] to-[#153F9A] relative w-32 h-[90px]">
                <span className="text-white font-bricolage text-base font-bold leading-normal absolute left-[30px] top-[26px] w-[68px]">
                  Machine<br />Learning
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 flex-1 py-[7px]">
                <h4 className="self-stretch text-[#1A212F] font-bricolage text-base font-semibold">
                  RL-1.0Y: Fundamentals of Reinforcement Learning
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                    Purchased on 12 June 2025
                  </span>
                  <div className="w-px h-[21px] bg-[rgba(26,33,47,0.24)]" />
                  <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                    Access till 12 Dec 2025
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[#1A212F] font-bricolage text-2xl font-bold">$12</span>
                <button
                  onClick={() => setPurchasedModel(true)}
                  className="text-[rgba(26,33,47,0.7)] font-bricolage cursor-pointer text-sm font-semibold tracking-[-0.28px] underline">
                  View Payment History
                </button>
              </div>
            </div>
            <div className="h-px self-stretch bg-[rgba(0,0,0,0.08)]" />
            <div className="flex items-center gap-4 self-stretch">
              <div className="flex px-[30px] py-[26px] justify-center items-center rounded-md bg-gradient-to-b from-[#000155] to-[#153F9A] relative w-32 h-[90px]">
                <span className="text-white font-bricolage text-base font-bold leading-normal absolute left-[30px] top-[26px] w-[68px]">
                  Machine<br />Learning
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 flex-1 py-[7px]">
                <h4 className="self-stretch text-[#1A212F] font-bricolage text-base font-semibold">
                  RL-1.0Y: Fundamentals of Reinforcement Learning
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                    Purchased on 12 June 2025
                  </span>
                  <div className="w-px h-[21px] bg-[rgba(26,33,47,0.24)]" />
                  <span className="text-[rgba(26,33,47,0.7)] font-bricolage text-sm font-light leading-[150%]">
                    Access till 12 Dec 2025
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[#1A212F] font-bricolage text-2xl font-bold">$12</span>
                <button className="text-[rgba(26,33,47,0.7)] cursor-pointer font-bricolage text-sm font-semibold tracking-[-0.28px] underline">
                  View Payment History
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <h3 className="text-[rgba(26,33,47,0.7)] font-bricolage text-lg font-semibold tracking-[-0.18px]">
            Invoices
          </h3>
          <div className="flex flex-col items-start self-stretch">
            <div className="flex items-start self-stretch">
              <div className="flex w-[566px] px-6 py-5 items-center gap-2.5 border-b border-[rgba(26,33,47,0.24)]">
                <span className="text-[#1A212F] font-bricolage text-sm font-light leading-[150%]">Invoice</span>
              </div>
              <div className="flex w-[145px] px-6 py-5 items-center gap-2.5 border-b border-[rgba(26,33,47,0.24)]">
                <span className="text-[#1A212F] font-bricolage text-sm font-light leading-[150%]">Amount</span>
              </div>
              <div className="flex px-6 py-5 items-center flex-1 border-b border-[rgba(26,33,47,0.24)]">
                <span className="text-[#1A212F] font-bricolage text-sm font-light leading-[150%]">Date</span>
              </div>
              <div className="flex px-6 py-5 items-center flex-1 border-b border-[rgba(26,33,47,0.24)]">
                <span className="text-[#1A212F] font-bricolage text-sm font-light leading-[150%]">Download Invoice</span>
              </div>
            </div>

            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-start self-stretch">
                <div className="flex w-[566px] px-6 py-5 items-center gap-2.5 border-b border-[rgba(26,33,47,0.24)]">
                  <span className="flex-1 text-[#1A212F] font-bricolage text-base font-normal">
                    RL-1.0Y: Fundamentals of Reinforcement Learning
                  </span>
                </div>
                <div className="flex w-[145px] px-6 py-5 items-center gap-2.5 border-b border-[rgba(26,33,47,0.24)]">
                  <span className="text-[#1A212F] font-bricolage text-base font-normal">$23</span>
                </div>
                <div className="flex px-6 py-5 items-center flex-1 border-b border-[rgba(26,33,47,0.24)]">
                  <span className="text-[#1A212F] font-bricolage text-base font-normal">23 Jan 2023</span>
                </div>
                <div className="flex px-6 py-5 items-center flex-1 border-b border-[rgba(26,33,47,0.24)]">
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 1.24976C12.1989 1.24976 12.3897 1.32877 12.5303 1.46943C12.671 1.61008 12.75 1.80084 12.75 1.99976V12.9728L14.43 11.0118C14.4941 10.9369 14.5723 10.8754 14.6601 10.8308C14.748 10.7861 14.8438 10.7593 14.942 10.7516C15.0403 10.744 15.139 10.7558 15.2327 10.7864C15.3264 10.817 15.4131 10.8657 15.488 10.9298C15.5629 10.9938 15.6244 11.072 15.669 11.1599C15.7136 11.2477 15.7405 11.3435 15.7481 11.4418C15.7557 11.54 15.7439 11.6388 15.7134 11.7325C15.6828 11.8262 15.6341 11.9129 15.57 11.9878L12.57 15.4878C12.4996 15.5701 12.4122 15.6362 12.3138 15.6815C12.2154 15.7268 12.1083 15.7503 12 15.7503C11.8917 15.7503 11.7846 15.7268 11.6862 15.6815C11.5878 15.6362 11.5004 15.5701 11.43 15.4878L8.43 11.9878C8.36592 11.9129 8.3172 11.8262 8.28664 11.7325C8.25608 11.6388 8.24427 11.54 8.25188 11.4418C8.2595 11.3435 8.28639 11.2477 8.33102 11.1599C8.37565 11.072 8.43715 10.9938 8.512 10.9298C8.58685 10.8657 8.6736 10.817 8.76728 10.7864C8.86096 10.7558 8.95974 10.744 9.05798 10.7516C9.15623 10.7593 9.25201 10.7861 9.33986 10.8308C9.42772 10.8754 9.50592 10.9369 9.57 11.0118L11.25 12.9718V1.99976C11.25 1.80084 11.329 1.61008 11.4697 1.46943C11.6103 1.32877 11.8011 1.24976 12 1.24976ZM6.996 8.25176C7.19491 8.2507 7.3861 8.3287 7.5275 8.4686C7.6689 8.6085 7.74894 8.79884 7.75 8.99776C7.75106 9.19667 7.67306 9.38786 7.53316 9.52926C7.39326 9.67066 7.20291 9.7507 7.004 9.75176C5.911 9.75776 5.136 9.78576 4.547 9.89376C3.981 9.99876 3.652 10.1658 3.409 10.4088C3.132 10.6858 2.952 11.0748 2.853 11.8088C2.752 12.5638 2.75 13.5648 2.75 14.9998V15.9998C2.75 17.4358 2.752 18.4368 2.853 19.1918C2.952 19.9258 3.133 20.3138 3.409 20.5918C3.686 20.8678 4.074 21.0478 4.809 21.1468C5.563 21.2488 6.565 21.2498 8 21.2498H16C17.435 21.2498 18.436 21.2488 19.192 21.1468C19.926 21.0478 20.314 20.8678 20.591 20.5908C20.868 20.3138 21.048 19.9258 21.147 19.1918C21.248 18.4368 21.25 17.4358 21.25 15.9998V14.9998C21.25 13.5648 21.248 12.5638 21.147 11.8078C21.048 11.0748 20.867 10.6858 20.591 10.4088C20.347 10.1658 20.019 9.99876 19.453 9.89376C18.864 9.78576 18.089 9.75776 16.996 9.75176C16.8975 9.75123 16.8001 9.73131 16.7093 9.69314C16.6185 9.65496 16.5361 9.59927 16.4668 9.52926C16.3976 9.45924 16.3428 9.37627 16.3056 9.28507C16.2684 9.19388 16.2495 9.09625 16.25 8.99776C16.2505 8.89927 16.2704 8.80184 16.3086 8.71105C16.3468 8.62026 16.4025 8.53787 16.4725 8.4686C16.5425 8.39933 16.6255 8.34452 16.7167 8.30732C16.8079 8.27011 16.9055 8.25123 17.004 8.25176C18.086 8.25776 18.987 8.28376 19.724 8.41876C20.482 8.55876 21.127 8.82376 21.652 9.34876C22.254 9.94976 22.512 10.7088 22.634 11.6088C22.75 12.4748 22.75 13.5778 22.75 14.9448V16.0548C22.75 17.4228 22.75 18.5248 22.634 19.3918C22.512 20.2918 22.254 21.0498 21.652 21.6518C21.05 22.2538 20.292 22.5118 19.392 22.6338C18.525 22.7498 17.422 22.7498 16.055 22.7498H7.945C6.578 22.7498 5.475 22.7498 4.608 22.6338C3.708 22.5128 2.95 22.2538 2.348 21.6518C1.746 21.0498 1.488 20.2918 1.367 19.3918C1.25 18.5248 1.25 17.4218 1.25 16.0548V14.9448C1.25 13.5778 1.25 12.4748 1.367 11.6078C1.487 10.7078 1.747 9.94976 2.348 9.34776C2.873 8.82376 3.518 8.55776 4.276 8.41876C5.013 8.28376 5.914 8.25776 6.996 8.25176Z" fill="#174CD2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Modal */}
      {basicModal && (
        <BasicPlanModal onClose={() => setBasicModal(false)} />
      )}

      {/* Custom Modal */}
      {customModal && (
        <CustomPlanModal onClose={() => setCustomModal(false)} />
      )}

      {/* Purchased Modal */}
      {purchasedModel && (
        <PurchasedCourseModal onClose={() => setPurchasedModel(false)} />
      )}

      {/* Cancel Modal */}
      {cancelModal && (
        <CancelModal onClose={() => setCancelModal(false)} />
      )}

    </div>

  );
}
