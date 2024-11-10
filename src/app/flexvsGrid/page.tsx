
export default function Flexvsgrid() {
    // Yeh ek default function hai jo Flexvsgrid component ko export karta hai
    return (
      <div className="h-screen w-full flex items-center justify-center">
        {/* // Yeh outer div pura screen ka height aur width le raha hai aur grid ko center mein rakh raha hai */}
        <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full h-full">
          {/* // Yeh inner div ko grid layout banata hai jo ke 4 columns aur 3 rows mein hai */}
          <div className="bg-red-700 row-span-3"></div>
          {/* // Pehla grid item, red color background ke sath aur 3 rows span karta hai */}
          <div className="bg-slate-500 col-span-2"></div>
          {/* // Dusra item gray color mein hai aur 2 columns ko span karta hai */}
          <div className="bg-blue-900 row-span-1"></div>
          {/* // Teesra item dark blue color ke sath sirf ek row mein hai */}
          <div className="bg-pink-900 row-span-1"></div>
          {/* // Chautha item pink color aur sirf ek row span karta hai */}
          <div className="bg-purple-700 row-span-1"></div>
          {/* // Panchwa item purple color aur ek row ke sath */}
          <div className="bg-blue-500 row-span-2"></div>
          {/* // Chhata item light blue aur 2 rows ko span karta hai */}
          <div className="bg-red-900 row-span-1"></div> 
          {/* // Saathwa item dark red aur ek row mein hai */}
          <div className="bg-orange-500 row-span-1"></div> 
          {/* // Aakhri item orange color ke sath aur sirf ek row mein hai */}
        </div>
      </div>
    );
  }
  