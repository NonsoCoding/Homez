import { DollarSign, IdCardIcon, Key, LockKeyholeIcon } from "lucide-react"; 

const Reasons = () => {
  return (
    <section className="bg-[#181A20] grid py-10 md:py-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[80%] gap-10">
        
        {/* Left Side Text */}
        <div className="max-w-[100%] lg:max-w-[80%] flex flex-col gap-4">
          <p className="text-white font-semibold text-2xl">
            Let’s find the right selling option for you
          </p>
          <p className="text-gray-300 text-sm">
            From property management to secure transactions, our services are 
            designed to make buying, selling, and renting homes easier, faster, 
            and stress-free. Choose the option that works best for your needs.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Property Management */}
          <div className="flex flex-col gap-3">
            <LockKeyholeIcon className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-[13px] font-semibold">Property Management</p>
              <p className="text-[12px] text-gray-300">
                Professional care for your property, including tenant support, 
                maintenance, and rent collection—so you can enjoy peace of mind.
              </p>
            </div>
          </div>

          {/* Mortgage Services */}
          <div className="flex flex-col gap-3">
            <Key className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-[13px] font-semibold">Mortgage Services</p>
              <p className="text-[12px] text-gray-300">
                Get expert guidance on financing options tailored to your budget, 
                making home ownership more accessible and affordable.
              </p>
            </div>
          </div>

          {/* Currency Services */}
          <div className="flex flex-col gap-3">
            <DollarSign className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-[13px] font-semibold">Currency Services</p>
              <p className="text-[12px] text-gray-300">
                Seamless foreign currency exchange support for international 
                buyers and sellers, ensuring smooth global transactions.
              </p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col gap-3">
            <IdCardIcon className="w-6 h-6 text-red-400" />
            <div>
              <p className="text-[13px] font-semibold">Secure Payment</p>
              <p className="text-[12px] text-gray-300">
                Safe, transparent, and fast payment methods with full encryption 
                to protect your real estate transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
