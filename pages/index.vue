<template>
    <div>
        <div class="py-12 bg-primary">
            <div class="flex flex-col items-center space-y-6">
                <SearchInput />
                <CantonSelect />
            </div>
        </div>
        
        <div class="mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <GentileList />
        </div>
    </div>
</template>

<script>
export default {
    
    name: 'HomePage',
    
};
</script>
