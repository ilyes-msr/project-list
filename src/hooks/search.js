import {ref, computed, watch} from 'vue';

export default function useSearch(items, searchProp) {

const enteredSearchTerm = ref(''),
      activeSearchTerm = ref('');

const availableItems = computed(() => {
let filteredItems = [];
if (activeSearchTerm.value) {
  filteredItems = items.value.filter((itm) =>
    itm[searchProp].includes(activeSearchTerm.value)
  );
} else if (items.value) {
  filteredItems = items.value;
}
return filteredItems;
});

watch(enteredSearchTerm, (val) => {
setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);  
})

const updateSearch = (val) => {
enteredSearchTerm.value = val;
}

return {
  enteredSearchTerm,
  updateSearch,
  availableItems
}
}