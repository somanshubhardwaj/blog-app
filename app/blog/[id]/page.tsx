import { Button } from "@/components/ui/button";
import {
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Share,
  Flag,
  SquareChevronRight,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center flex-col mt-4 ">
      <div className=" flex    flex-col max-w-5xl p-6">
        <h1 className="md:text-6xl  font-semibold sm:text-4xl text-4xl">
          Hello Guys My first blog{" "}
        </h1>
        <div className="flex  flex-col m-1 justify-start ">
          <div className="flex gap-3 justify-start m-2 mt-4 items-center">
            <div className="w-[3rem]  ">
              <img
                className="rounded-full "
                src="https://via.placeholder.com/150"
                alt="profile"
              />
            </div>
            <div className="flex justify-between w-full flex-col  ">
              <h1 className="  font-medium text-xl">Username</h1>{" "}
              <h1 className="text-xs"> Published On xx-xx-xxxx</h1>
            </div>
          </div>
          <div className="flex  mt-3 gap-10 p-1 border border-solid border-x-0 text-muted-foreground py-3 justify-between ">
            <div className="flex gap-10 ">
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Heart size={"20px"} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <MessageSquare size={"20px"} />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Share size={20} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Flag size={20} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <SquareChevronRight  size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-pretty  text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          reprehenderit similique, itaque totam corporis atque numquam animi
          ratione? Dignissimos architecto alias maiores perspiciatis commodi
          unde culpa incidunt vitae qui molestias, magnam repellendus ducimus
          nisi deleniti modi sunt nemo voluptas! Itaque alias eaque harum autem,
          expedita at eveniet, voluptatibus perspiciatis veniam adipisci
          accusantium! Est, ab asperiores ipsa harum itaque a voluptatibus culpa
          autem voluptate expedita. Impedit exercitationem placeat architecto,
          quia facere atque qui eveniet ipsam minus molestias praesentium illo
          fugit numquam tenetur cupiditate? Doloremque laudantium veritatis
          perspiciatis cumque similique libero dolorum, molestiae corrupti iure
          blanditiis accusantium deserunt eaque, rem eveniet natus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quas reprehenderit
          similique, itaque totam corporis atque numquam animi ratione?
          Dignissimos architecto alias maiores perspiciatis commodi unde culpa
          incidunt vitae qui molestias, magnam repellendus ducimus nisi deleniti
          modi sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus?
        </div>

        <div className="flex flex-wrap gap-4  my-12">
          <div className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm">
            Heello world
          </div>
          <div className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm">
            Heello world
          </div>
          <div className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm">
            Heello world
          </div>
          <div className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm">
            Heello world
          </div>
          <div className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm">
            Heello world
          </div>
        </div>
        <div className="flex  mt-3 gap-10 p-1  text-muted-foreground justify-between ">
          <div className="flex gap-10 ">
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Heart size={"20px"} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <MessageSquare size={"20px"} />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Share size={20} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Flag size={20} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <SquareChevronRight  size={20} />
            </div>
          </div>
        </div>
        <hr className="text-primary/10 mt-5" />
        <div>
          <div className="w-[6rem] my-5">
            <img
              className="rounded-full "
              src="https://via.placeholder.com/150"
              alt="profile"
            />
          </div>
          <div className="flex justify-between w-full flex-col  ">
            <h1 className="  font-medium text-3xl">Written By Username</h1>{" "}
            <h1 className="text-base text-muted-foreground my-3 ">
              {" "}
              Published On xx-xx-xxxx
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, blanditiis?
            </p>
          </div>
          <hr className="text-primary/10 my-5" />
        </div>
        <div>
          <span className="text-2xl font-bold ">More from the author</span>
          <br />
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-2">
              <div className="col-span-1 ">
                <div className="  grid grid-cols-4 gap-2">
                  <div className="rounded-md bg-gray-300 col-span-1">.</div>
                  <div className="col-span-3">
                    <h1 className="'text-2xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="  grid grid-cols-4 gap-2">
                  <div className="rounded-md bg-gray-300 col-span-1">.</div>
                  <div className="col-span-3">
                    <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="  grid grid-cols-4 gap-2">
                  <div className="rounded-md bg-gray-300 col-span-1">.</div>
                  <div className="col-span-3">
                    <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="  grid grid-cols-4 gap-2">
                  <div className="rounded-md bg-gray-300 col-span-1">.</div>
                  <div className="col-span-3">
                    <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="text-primary/10 my-5" />
          <span className="text-2xl font-bold ">More from the author</span>
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-2">
              <div className="col-span-1 ">
                <div className="gap-2">
                  <div className="rounded-md bg-gray-300 w-full h-[15rem]">
                    .
                  </div>
                  <div className="">
                    <h1 className="text-3xl font-bold mt-3">
                      Lorem, ipsum dolor.
                    </h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="gap-2">
                  <div className="rounded-md bg-gray-300 w-full h-[15rem]">
                    .
                  </div>
                  <div className="">
                    <h1 className="text-3xl font-bold mt-3">
                      Lorem, ipsum dolor.
                    </h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="gap-2">
                  <div className="rounded-md bg-gray-300 w-full h-[15rem]">
                    .
                  </div>
                  <div className="">
                    <h1 className="text-3xl font-bold mt-3">
                      Lorem, ipsum dolor.
                    </h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="gap-2">
                  <div className="rounded-md bg-gray-300 w-full h-[15rem]">
                    .
                  </div>
                  <div className="">
                    <h1 className="text-3xl font-bold mt-3">
                      Lorem, ipsum dolor.
                    </h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="col-span-1 ">
                <div className="gap-2">
                  <div className="rounded-md bg-gray-300 w-full h-[15rem]">
                    .
                  </div>
                  <div className="">
                    <h1 className="text-3xl font-bold mt-3">
                      Lorem, ipsum dolor.
                    </h1>
                    <p className="text-base mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Veritatis, esse? Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Ad, quam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-[10rem]">
          <button className=" bg-background border text-primary border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-secondary">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
