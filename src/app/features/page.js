"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function QRMenuPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">
            🍽️ Smart QR Menu & Order Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-lg text-center mb-6">
            Enhance your restaurant experience with a **digital QR menu**. Allow
            customers to scan, browse, and order effortlessly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            🚀 Features
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Instant digital menu access via QR code</li>
            <li>Real-time dish availability updates</li>
            <li>Seamless online ordering system</li>
            <li>Boosts efficiency and reduces staff workload</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            🔍 How It Works
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li>Place a QR code on tables or entrances</li>
            <li>Customers scan the QR to access the menu</li>
            <li>They browse and place orders from their phone</li>
            <li>Orders are sent directly to the restaurant system</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            📌 Restaurant Owner Verification
          </h2>
          <p className="text-gray-700 mb-4">
            To provide you with a dashboard, we need to confirm you are a
            restaurant owner. Please complete the verification step.
          </p>
          <form className="bg-white p-4 shadow-md rounded-lg">
            <label className="block mb-2 font-semibold">
              Do you own or manage a restaurant?
            </label>
            <select className="w-full p-2 border rounded mb-4">
              <option>Yes</option>
              <option>No</option>
            </select>
            <label className="block mb-2 font-semibold">
              Upload business registration document:
            </label>
            <input type="file" className="w-full p-2 border rounded mb-4" />
            <Button className="w-full px-6 py-3 text-lg">
              Submit & Get Dashboard Access
            </Button>
          </form>

          <div className="mt-8 flex justify-center">
            <Button
              className="px-6 py-3 text-lg"
              onClick={() => router.push("/login")}
            >
              Get Started
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
