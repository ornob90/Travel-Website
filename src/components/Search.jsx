import { RiCustomerServiceFill } from "react-icons/ri";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="flex flex-col lg:col-span-2 justify-evenly ">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid gap-8 py-4 sm:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:flex-row">
            <button>
              <RiCustomerServiceFill size={50} />
            </button>
            <div>
              <h3 className="py-1">Leading Service</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:flex-row">
            <button>
              <RiCustomerServiceFill size={50} />
            </button>
            <div>
              <h3 className="py-1">Automated Bookings</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center border">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="py-2 text-gray-200 bg-gray-800">BOOK NOW AND SAVE</p>
        </div>

        <form className="w-full">
          <div className="flex flex-col my-4">
            <label>Destination</label>
            <select className="p-2 border rounded-md ">
              <option>Grand Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-In</label>
            <input className="p-2 border rounded-m " type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-Out</label>
            <input className="p-2 border rounded-m " type="date" />
          </div>
          <div>
            <button className="w-full">Rates & Availability</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
