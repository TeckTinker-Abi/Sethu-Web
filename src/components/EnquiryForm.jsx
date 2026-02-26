import React, { useState } from "react";

function EnquiryForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        department: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const validateField = (name, value) => {
        let error = "";

        if (!value) {
            return "This field is required";
        }

        if (name === "fullName" && !/^[A-Za-z\s]+$/.test(value)) {
            error = "Name should contain only letters";
        }

        if (name === "mobile") {
            if (!/^[0-9]*$/.test(value)) {
                error = "Mobile must contain only digits";
            } else if (value.length !== 10) {
                error = "Mobile must be exactly 10 digits";
            }
        }

        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            error = "Enter a valid email";
        }

        if (name === "message" && value.trim().length < 5) {
            error = "Message must be at least 5 characters";
        }

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setTouched({ ...touched, [name]: true });

        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setShowPopup(true);

            // Optional: Reset form after submit
            setFormData({
                fullName: "",
                mobile: "",
                email: "",
                department: "",
                message: "",
            });

            setTouched({});
        }
    };

    return (
        <section className="w-full px-6 md:px-16 py-16">
            <form
                onSubmit={handleSubmit}
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {/* Full Name */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    {touched.fullName && errors.fullName && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.fullName}
                        </span>
                    )}
                </div>

                {/* Mobile */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium">
                        Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="mobile"
                        maxLength="10"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    {touched.mobile && errors.mobile && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.mobile}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    {touched.email && errors.email && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </span>
                    )}
                </div>

                {/* Department */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium">
                        Department <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    >


                        <option value="">Select Department</option>

                        <option value="Mechanical Engineering">Mechanical Engg</option>
                        <option value="Computer Science & Engineering">
                            Computer Science & Engg
                        </option>
                        <option value="Electronics & Communication Engineering">
                            Electronics & Commn. Engg
                        </option>
                        <option value="Electrical & Electronics Engineering">
                            Electrical & Electronics Engg
                        </option>
                        <option value="Information Technology">
                            Information Technology
                        </option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Agricultural Engineering">
                            Agricultural Engineering
                        </option>
                        <option value="Biomedical Engineering">
                            Biomedical Engineering
                        </option>
                        <option value="Computer Science & Business Systems">
                            Computer Science & Business Sys.
                        </option>
                        <option value="Chemical Engineering">
                            Chemical Engineering
                        </option>
                        <option value="Bio Technology">
                            Bio Technology
                        </option>
                        <option value="Computer Science and Design">
                            Computer Science and Design
                        </option>
                        <option value="Artificial Intelligence & Data Science">
                            Artificial Intelli. & Data Science
                        </option>
                        <option value="Computer Science & Engineering (AI & ML)">
                            Computer Science & Engg (AI & ML)
                        </option>
                        <option value="Computer Science & Engineering (Cyber Security)">
                            Computer Science & Engg (Cyber Security)
                        </option>
                        <option value="Computer Science & Engineering (IoT)">
                            Computer Science & Engg (IoT)
                        </option>
                        <option value="Science & Humanities">
                            Science & Humanities
                        </option>


                    </select>
                    {touched.department && errors.department && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.department}
                        </span>
                    )}
                </div>

                {/* Message */}
                <div className="flex flex-col md:col-span-2">
                    <label className="mb-2 font-medium">
                        Your Enquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-3 rounded-md resize-none focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    {touched.message && errors.message && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.message}
                        </span>
                    )}
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 font-bold uppercase tracking-wide transition"
                    >
                        Submit Enquiry
                    </button>
                </div>
            </form>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-8 w-96 text-center shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Success!
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Your enquiry has been submitted successfully.
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default EnquiryForm;