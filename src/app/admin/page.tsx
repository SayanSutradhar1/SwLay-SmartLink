import AdminHeader from "@/components/Admin/AdminHeader";
import AdminProfile from "@/components/Admin/AdminProfile";
import LinkSection from "@/components/Admin/LinkSection";
import SideBar from "@/components/Shared/SideBar";
import UserContextProvider from "@/context/user.provider";

const page = () => {
  

  return (
    <UserContextProvider>
      <main className={`bg-gray-100 min-h-screen w-full pl-72`}>
        <div className="flex">
          <SideBar />
          <div className="flex flex-1 p-10 flex-col items-center min-h-screen">
            <div className="w-full flex flex-col gap-2">
              <AdminHeader/>
              <AdminProfile/>
              <LinkSection />
            </div>
          </div>
        </div>
      </main>
    </UserContextProvider>
  );
};

export default page;
