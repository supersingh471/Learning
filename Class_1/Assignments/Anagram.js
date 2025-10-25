    function isAnagram(str1, str2) {
        if (str1.length !== str2.length) {
            
            return false;
        } else {

            const sortedstr1 = str1.toLowerCase().split('').sort().join();
            const sortedstr2 = str2.toLowerCase().split('').sort().join();

            return sortedstr1 === sortedstr2;
        }

    }
    
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));