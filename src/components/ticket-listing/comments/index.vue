<template>
    <div class="card">
        <Timeline :value="events" class="customized-timeline p-3" :pt="{ opposite: 'hidden' }">
            <template #marker>
                <span
                    class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 p-2">
                    <i class="pi pi-envelope"></i>
                </span>
            </template>
            <template #content="{ item }">
                <div class="flex gap-x-2">
                    <div
                        class="bg-white text-gray-800 h-8 w-8 flex items-center justify-center font-semibold mt-4  text-xs rounded-full ">
                        {{ getAlphabets(item.name) }}
                    </div>
                    <Card class="mt-3 !bg-zinc-800 max-w-4xl" :pt="{ body: '!p-3 !px-4' }">
                        <template #title>
                            <p class="text-sm">
                                {{ item.name }} <span class="text-xs font-normal text-gray-300">{{ item.time }}</span>
                            </p>
                        </template>
                        <template #content>
                            <img v-if="item.image" :src="item.image" :alt="item.name" width="200"
                                class="shadow-1 rounded-md mb-3" />
                            <p class="text-sm">
                                {{ item.message }}
                            </p>
                        </template>
                    </Card>
                </div>
            </template>
        </Timeline>
    </div>
</template>

<script setup>

defineProps({
    events: {
        type: Array,
        default: null
    }
})

const getAlphabets = (name) => {
    return name?.split(' ').map(el => el[0]).join('')
}


</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>
