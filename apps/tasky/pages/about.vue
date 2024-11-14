<template>
    <div class="flex flex-col">
        <img src="../public/Unlogged/aboutImages/sakura.webp" class="absolute z-0 right-0">
        <div class="bg-about-50/50 flex w-screen justify-between pb-20 z-10 rounded-3xl">
            <div class="flex flex-col w-3/6">
                <h1 class="text-4xl pt-28 pl-20 text-about-200">
                    Who are we?
                </h1>
                <h2 class="text-2xl pt-16 pl-20 pr-40 text-about-200">
                    Our team is on a mission to make productivity more rewarding and the planet a little greener!
                    Driven by the idea that small, positive actions add up, we created this app to help you complete your personal goals while giving back to nature.
                    Each task you check off plants a real tree, bringing your achievements to life in a whole new way.
                    We’re passionate about technology, sustainability, and helping people reach their full potential.
                    Join us on this journey to make a difference, one task—and one tree—at a time!
                </h2>
            </div>
            <div class="w-1/2 pt-28 px-40">
                <img src="../public/Unlogged/aboutImages/ourTeam.webp" class="rounded-2xl">
            </div>
        </div>
        <div class="bg-about-50/50 flex w-screen justify-between z-10 rounded-3xl">
            <div class="w-1/2 pt-28 px-40">
                <img src="../public/Unlogged/aboutImages/missionAndVision.webp" class="rounded-2xl">
            </div>
            <div class="flex flex-col w-3/6">
                <h1 class="text-4xl pt-28 pl-20 text-about-200">
                    Our Mission & Vision.
                </h1>
                <h2 class="text-2xl pt-16 pl-20 pr-40 text-about-200">
                    Our mission is to make personal growth meaningful, not just for individuals but for the planet.
                    We envision a world where every completed goal has a lasting impact on our environment.
                </h2>
            </div>
        </div>
        <div class="bg-about-50/50 flex w-screen justify-between pb-44 z-10 rounded-3xl">
            <div class="flex flex-col w-3/6">
                <h1 class="text-4xl pt-28 pl-20 text-about-200">
                    How It Works.
                </h1>
                <h2 class="text-2xl pt-16 pl-20 pr-40 text-about-200">
                    ‣ Set Your Goals
                    <ShowFullText
                        full-text="Create personal goals or tasks you want to accomplish—big or small, it’s up to you!
                        From exercising regularly to learning a new skill, you’re in control of what’s important."
                    />
                </h2>
                <h2 class="text-2xl pt-8 pl-20 pr-40 text-about-200">
                    ‣ Complete Your Tasks
                    <ShowFullText
                        full-text="Track your progress by marking tasks as complete. Each completed task isn’t just a
                        checkmark—it’s a step toward making a positive impact on the world."
                    />
                </h2>
                <h2 class="text-2xl pt-8 pl-20 pr-40 text-about-200">
                    ‣ Plant a Tree with Each Milestone
                    <ShowFullText
                        full-text="For every task completed, a tree is planted on your behalf.
                        We partner with tree-planting organizations to ensure your achievements are matched with real-world action.
                        By completing goals, you’re directly supporting global reforestation efforts."
                    />
                </h2>
                <h2 class="text-2xl pt-8 pl-20 pr-40 text-about-200">
                    ‣ Track Your Impact
                    <ShowFullText
                        full-text="Watch your “Forest” grow! Our app tracks every tree you’ve planted, showing the direct impact of your achievements.
                        You’ll see how many trees you’ve contributed, and we’ll keep you
                        updated on the difference your personal growth is making in the environment."
                    />
                </h2>
                <h2 class="text-2xl pt-8 pl-20 pr-40 text-about-200">
                    ‣ Challenge Yourself & Share
                    <ShowFullText
                        full-text="Need motivation? Set higher goals or invite friends to join!
                        Share your progress, compare your achievements, and challenge each other to keep growing your collective forest."
                    />
                </h2>
            </div>
            <div class="w-1/2 pt-28 px-40">
                <img src="../public/Unlogged/aboutImages/howItWorks.webp" class="rounded-2xl">
            </div>
        </div>
    </div>
</template>
<script setup>
import ShowFullText from '~/components/Utils/ShowFullText.vue';

</script>