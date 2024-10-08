<template>
    <!-- Add Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <div class="flex">
        <div id="app" class=" bg-white shadow-lg w-1/6 flex flex-col pb-[50px] h-screen hidden md:flex">
            <div class="flex items-center justify-between p-4 ">
                <div class="text-blue-600 text-2xl font-bold">QRFY</div>
                <svg fill="#bfbfbf" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 527.42 527.42"
                    xml:space="preserve" stroke="#bfbfbf">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    d="M4.925,271.773l263.77,216.474c6.591,5.288,9.593,3.137,6.707-4.807l-69.104-206.862 c-2.889-7.94-2.861-20.809,0.061-28.736l68.982-203.849c2.923-7.929-0.082-10.104-6.707-4.859L4.987,252.704 C-1.638,257.948-1.666,266.489,4.925,271.773z">
                                </path>
                                <path
                                    d="M255.845,271.773l263.77,216.474c6.591,5.288,9.593,3.137,6.707-4.807l-69.104-206.862 c-2.889-7.94-2.861-20.809,0.061-28.736l68.981-203.849c2.923-7.929-0.082-10.104-6.707-4.859l-263.647,213.57 C249.282,257.948,249.254,266.489,255.845,271.773z">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="mt-4 ">
                <div class="flex items-center p-4 bg-blue-50 text-blue-600">
                    <div style="width: 24px;margin-right: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#D3D3D3">
                            <path
                                d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                        </svg>
                    </div>
                    <span>New QR</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <div style="width: 24px; margin-right: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D3D3D3">
                            <path
                                d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                        </svg>
                    </div>
                    <span>Bulk QR generation</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <div style="width: 24px;margin-right: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#D3D3D3">
                            <path
                                d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 96l0 64 64 0 0-64L64 96zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm64 16l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm80 64l-64 0 0 64 64 0 0-64zM256 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-160zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
                        </svg>

                    </div>
                    <span>My QR codes</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <div style="width: 24px;margin-right: 10px;">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24" fill="#D3D3D3">
                            <path d="M2 20H8V12H2V20ZM4 14H6V18H4V14Z"></path>
                            <path d="M16 4V20H22V4H16ZM20 18H18V6H20V18Z"></path>
                            <path d="M9 20H15V8H9V20ZM11 10H13V18H11V10Z"></path>
                        </svg>
                    </div>
                    <span>Stats</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <div>
                        <i class="fas fa-file-alt mr-2"></i>
                    </div>
                    <span class="ml-1">Templates</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <div style="width: 24px;margin-right: 10px;">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2 2v20h20V2H2Zm18 18H4V8h16v12Zm0-14H4V4h16v2Z"></path>
                            <path fill="currentColor"
                                d="M16 14c0 1.1-.9 2-2 2v2c2.21 0 4-1.79 4-4s-1.79-4-4-4v2c1.1 0 2 .9 2 2ZM10 18v-2c-1.1 0-2-.9-2-2s.9-2 2-2v-2c-2.21 0-4 1.79-4 4s1.79 4 4 4ZM14 13h-4v2h4v-2Z">
                            </path>
                        </svg>
                    </div>
                    <span>My domains</span>
                </div>
                <div class="flex items-center p-4 text-gray-400">
                    <i class="fas fa-credit-card mr-2"></i>
                    <span>Plans and payments</span>
                </div>
            </div>
            <div class="w-full text-center mt-auto">
                <div class="text-gray-400 mb-2 flex items-center justify-center">
                    <i class="fas fa-clock mr-1"></i>
                    <span>7 days remaining</span>
                </div>
                <button class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
                    Upgrade
                </button>
            </div>
        </div>
        <div id="app" class="bg-gray-100 w-full ">
            <!-- Thanh riêng cho Type of QR code với màu trắng -->
            <div class="mb-4 bg-white p-4 rounded-lg shadow w-full">
                <div class="flex items-center mb-2 pl-3 w-[45%] lg:w-[30%] "
                    style="border: 1px solid rgb(227, 227, 227);border-radius: 40px;">
                    <div class="flex items-center justify-center w-8 h-8 p-3 bg-blue-500 text-white rounded-full">1</div>
                    <div class="flex h-[40px] mr-4  justify-between ">
                        <span class="ml-2 text-lg font-medium pt-1 hidden lg:block">Type of QR code</span>
                        <svg style="color: rgb(217, 217, 217)" viewBox="0 0 18 39" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="css-itknvl-Connector-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.39251 0C3.62144 0.188345 3.8332 0.401077 4.02379 0.636277L16.9894 16.6363C18.3368 18.299 18.3368 20.701 16.9894 22.3637L4.02379 38.3637C3.8332 38.5989 3.62144 38.8117 3.39252 39H0.619339C1.6437 38.9985 2.61413 38.5319 3.26613 37.7273L16.2317 21.7273C17.2797 20.4341 17.2797 18.5659 16.2317 17.2727L3.26613 1.27266C2.61305 0.466746 1.64049 0 0.614258 0H3.39251Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="flex items-center justify-center w-8 h-8 p-3 bg-gray-200 text-gray-500 rounded-full">2</div>
                    <div class="flex h-[40px] mr-4 justify-between ">
                        <span class="ml-2 text-lg font-medium text-gray-500 pt-1 hidden lg:block">Content</span>
                        <svg style="color: rgb(217, 217, 217)" viewBox="0 0 18 39" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="css-itknvl-Connector-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.39251 0C3.62144 0.188345 3.8332 0.401077 4.02379 0.636277L16.9894 16.6363C18.3368 18.299 18.3368 20.701 16.9894 22.3637L4.02379 38.3637C3.8332 38.5989 3.62144 38.8117 3.39252 39H0.619339C1.6437 38.9985 2.61413 38.5319 3.26613 37.7273L16.2317 21.7273C17.2797 20.4341 17.2797 18.5659 16.2317 17.2727L3.26613 1.27266C2.61305 0.466746 1.64049 0 0.614258 0H3.39251Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="flex items-center justify-center w-8 h-8 p-3 lg bg-gray-200 text-gray-500 rounded-full">3</div>
                    <span class="ml-2 text-lg font-medium text-gray-500 hidden lg:block">QR design</span>
                </div>
            </div>
            <div class="flex w-full md:p-7">
                <div class="overflow-auto h-[900px] w-full md:w-3/4">
                    <h1 class="text-2xl  font-bold mb-2">Dynamic QR <span
                            class="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">WITH TRACKING</span></h1>
                    <p class="text-gray-600 mb-6">Update content in real time, without changing your code</p>

                    <div class="flex flex-col items-center w-full md:grid md:grid-cols-2 gap-4 ">
                        <!-- Các phần tử khác không thay đổi -->

                        <div v-for="(item, index) in items" :key="index"
                            class="bg-white  rounded-lg shadow flex items-center w-[90%] md:p-4 md:w-full ">
                            <img :src="item.imgSrc" alt="" width="80" height="80" />
                            <div>
                                <h2 class="text-lg font-medium">{{ item.title }}</h2>
                                <p class="text-gray-500">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 mt-5">
                        <!-- Static QR Text -->
                        <span class="font-semibold text-lg">Static QR</span>

                        <!-- No Tracking Button -->
                        <button class="bg-orange-400 text-white font-bold py-1 px-4 rounded-full">
                            NO TRACKING
                        </button>

                        <!-- Arrow Icon (Right) -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 24 24"
                            stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                        Reprint required when updating content
                    </p>
                </div>
                <div class="flex items-center justify-center  bg-gray-100 mx-auto ml-5 hidden md:flex">
                    <!-- Phone mockup container -->
                    <div> <img class="w-[90%]" src="../../public/e64764d3-1f56-4555-862f-06be44f47cda.jfif" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#url", title: "Website", description: "Open a URL" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#pdf", title: "PDF", description: "Show a PDF" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#link-list", title: "List of links", description: "Group links" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#images", title: "Images", description: "Show an image gallery" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#video", title: "Video", description: "Show a video" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#business", title: "Business", description: "Share information about your business" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#vcard-plus", title: "vCard Plus", description: "Share contact details" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#menu", title: "Menu", description: "Display the menu of a restaurant or bar" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#app", title: "Apps", description: "Redirect to an app store" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#mp3", title: "MP3", description: "Play an audio file" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#coupon", title: "Coupon", description: "Share a coupon" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#feedback", title: "Feedback", description: "Collect feedback and get rated" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#playlist", title: "Playlist", description: "Share your own music" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#landing", title: "Landing page", description: "Create your own page" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#event", title: "Event", description: "Promote and share an event" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#barcode", title: "2D Barcode", description: "Supports GS1 standards" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#social", title: "Social Media", description: "Share your social profiles" },
                { imgSrc: "https://qrfy.com/assets/qr-types-BbCrxh4l.svg#product", title: "Product", description: "Group information about your product" },
            ],
        };
    },
};
</script>