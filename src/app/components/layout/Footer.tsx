import QuickLinks from "../common/QuickLinks";
import WeatherFooter from "../common/Weather";

export default function Footer() {
    return (
      <footer className="w-full text-white border-t my-8 dark:border-white border-black">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:hidden text-center">
            <WeatherFooter
              apiKey={process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || ""}
              unit="metric"
            />
            <QuickLinks />
            <p className="text-sm text-black dark:text-white">dev.noah@gmail.com</p>
            <p className="text-sm text-black dark:text-white">&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>

          <div className="hidden md:grid md:grid-cols-3 items-start gap-4">
            <div className="justify-self-start">
              <WeatherFooter
                apiKey={process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || ""}
                unit="metric"
              />
            </div>

            <div className="justify-self-center">
              <QuickLinks />
            </div>

            <div className="justify-self-end flex flex-col gap-2">
              <p className="text-sm text-black dark:text-white">dev.noah@gmail.com</p>
              <p className="text-sm text-black dark:text-white">&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
}