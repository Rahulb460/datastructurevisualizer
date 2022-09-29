
var myMap = new Map();
function insertNode() {
        var node = parseInt(document.getElementById("text").value);
        document.getElementById("text").value = "";

        if (!myMap.has(node) && myMap.size <= 7) {

                if (document.getElementById("key1").value == "") {
                        document.getElementById("key1").value = node;
                        myMap.set(node, 1);
                }

                else if (node < document.getElementById("key1").value && document.getElementById("key2").value == "") {
                        document.getElementById("key2").value = node;
                        myMap.set(node, 2);
                }

                else if (node < document.getElementById("key1").value && node < document.getElementById("key2").value) {
                        if (document.getElementById("key4").value == "") {
                                document.getElementById("key4").value = node;
                                myMap.set(node, 4);
                        }
                }

                else if (node < document.getElementById("key1").value && node > document.getElementById("key2").value) {
                        if (document.getElementById("key5").value == "") {
                                document.getElementById("key5").value = node;
                                myMap.set(node, 5);
                        }
                }

                else if (node > document.getElementById("key1").value && document.getElementById("key3").value == "") {
                        document.getElementById("key3").value = node;
                        myMap.set(node, 3);
                }

                else if (node > document.getElementById("key1").value && node < document.getElementById("key3").value) {
                        if (document.getElementById("key6").value == "") {
                                document.getElementById("key6").value = node;
                                myMap.set(node, 6);
                        }
                }

                else if (node > document.getElementById("key1").value && node > document.getElementById("key3").value) {
                        if (document.getElementById("key7").value == "") {
                                document.getElementById("key7").value = node;
                                myMap.set(node, 7);
                        }
                }
        }
}

function deleteNode() {
        var str1 = parseInt(document.getElementById("text1").value);
        document.getElementById("text1").value = "";

        var str2 = myMap.get(str1);

        if (str2 == 1 && document.getElementById("key6").value != "") {
                document.getElementById("key1").value = parseInt(document.getElementById("key6").value);
                myMap.set(parseInt(document.getElementById("key6").value), str2);
                document.getElementById("key6").value = "";
                myMap.delete(str1);
        }

        else if (str2 == 1 && document.getElementById("key3").value != "") {
                document.getElementById("key1").value = parseInt(document.getElementById("key3").value);
                myMap.set(parseInt(document.getElementById("key3").value), str2);
                document.getElementById("key3").value = "";

                if (document.getElementById("key7").value != "") {
                        document.getElementById("key3").value = parseInt(document.getElementById("key7").value);
                        myMap.set(parseInt(document.getElementById("key7").value), 3)
                        document.getElementById("key7").value = "";
                }

                myMap.delete(str1);
        }

        else if (str2 == 1 && document.getElementById("key2").value != "") {
                document.getElementById("key1").value = parseInt(document.getElementById("key2").value);
                myMap.set(parseInt(document.getElementById("key2").value), str2);
                document.getElementById("key2").value = "";

                if (document.getElementById("key4").value != "") {
                        document.getElementById("key2").value = parseInt(document.getElementById("key4").value);
                        myMap.set(parseInt(document.getElementById("key2").value), 2)
                        document.getElementById("key4").value = "";
                }

                if (document.getElementById("key5").value != "") {
                        document.getElementById("key3").value = parseInt(document.getElementById("key5").value);
                        myMap.set(parseInt(document.getElementById("key3").value), 3)
                        document.getElementById("key5").value = "";
                }

                myMap.delete(str1);
        }

        else if (str2 == 2 && document.getElementById("key5").value != "") {
                document.getElementById("key2").value = parseInt(document.getElementById("key5").value);
                myMap.set(parseInt(document.getElementById("key5").value), str2);
                document.getElementById("key5").value = "";
                myMap.delete(str1);

        }

        else if (str2 == 2 && document.getElementById("key4").value != "") {
                document.getElementById("key2").value = parseInt(document.getElementById("key4").value);
                myMap.set(parseInt(document.getElementById("key4").value), str2);
                document.getElementById("key4").value = "";
                myMap.delete(str1);
        }

        else if (str2 == 3 && document.getElementById("key7").value != "") {
                document.getElementById("key3").value = parseInt(document.getElementById("key7").value);
                myMap.set(parseInt(document.getElementById("key7").value), str2);
                document.getElementById("key7").value = "";
                myMap.delete(str1);
        }

        else if (str2 == 3 && document.getElementById("key6").value != "") {
                document.getElementById("key3").value = parseInt(document.getElementById("key6").value);
                myMap.set(parseInt(document.getElementById("key6").value), str2);
                document.getElementById("key6").value = "";
                myMap.delete(str1);
        }

        else {
                document.getElementById("key" + str2).value = "";
                myMap.delete(str1);
        }
}