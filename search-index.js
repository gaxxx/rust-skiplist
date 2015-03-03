var searchIndex = {};
searchIndex['skiplist'] = {"items":[[0,"","skiplist","A skiplist is a list imlementation such that elements are always sorted, and the\ninsertion and deletion of elements are done in `O(log(n))`."],[3,"SkipList","","The skiplist implementation."],[3,"Iter","",""],[3,"IntoIter","",""],[11,"new","","Create a new skiplist with the default default comparison function of `|&a, &b|\na.cmp(b).unwrap()` and the default number of 16 levels.  As a result, any element which\ncannot be ordered will cause insertion to panic.",0],[11,"with_capacity","","Constructs a new, empty skiplist with the optimal number of levels for the intended\ncapacity.  Specifically, it uses `floor(log2(capacity))` number of levels, ensuring that\nonly *a few* nodes occupy the highest level.",0],[11,"with_comp","","Create a new skiplist using the provided function in order to determine the ordering of\nelements within the list.  It will be generated with 16 levels.",0],[11,"clear","","Clears the skiplist, removing all values.",0],[11,"len","","Returns the number of elements in the skiplist.",0],[11,"is_empty","","Returns `true` if the skiplist contains no elements.",0],[11,"order_by","","Change the method which determines the ordering of the elements in the skiplist.",0],[11,"insert","","Insert the element into the skiplist.",0],[11,"front","","Provides a reference to the front element, or `None` if the skiplist is empty.",0],[11,"back","","Provides a reference to the back element, or `None` if the skiplist is empty.",0],[11,"pop_front","","Removes the first element and returns it, or `None` if the sequence is empty.",0],[11,"pop_back","","Removes the last element and returns it, or `None` if the sequence is empty.",0],[11,"remove_value","","Removes and returns an element with the same value or None if there are no such values in\nthe skiplist.",0],[11,"remove_first","","Removes and returns an element with the same value or None if there are no such values in\nthe skiplist.",0],[11,"remove_index","","Removes and returns an element with the given index.",0],[11,"retain","","Retains only the elements specified by the predicate.",0],[11,"dedup","","Removes all repeated elements in the skiplist using the skiplist's comparison function.",0],[11,"into_iter","","Get an owning iterator over the entries of the skiplist.",0],[11,"iter","","Creates an iterator over the entries of the skiplist.",0],[11,"range","","Constructs a double-ended iterator over a sub-range of elements in the skiplist, starting\nat min, and ending at max. If min is `Unbounded`, then it will be treated as \"negative\ninfinity\", and if max is `Unbounded`, then it will be treated as \"positive infinity\".  Thus\nrange(Unbounded, Unbounded) will yield the whole collection.",0],[11,"drop","","",0],[11,"default","","",0],[11,"eq","","",0],[11,"ne","","",0],[11,"partial_cmp","","",0],[11,"cmp","","",0],[11,"extend","","",0],[6,"Output","",""],[11,"index","","",0],[11,"fmt","","",0],[11,"fmt","","",0],[6,"Item","",""],[6,"IntoIter","",""],[11,"into_iter","","",0],[6,"Item","",""],[6,"IntoIter","",""],[6,"Item","",""],[6,"IntoIter","",""],[11,"from_iter","","",0],[11,"hash","","",0],[6,"Item","",""],[11,"next","","",1],[11,"size_hint","","",1],[11,"next_back","","",1],[6,"Item","",""],[11,"next","","",2],[11,"size_hint","","",2],[11,"next_back","","",2]],"paths":[[3,"SkipList"],[3,"Iter"],[3,"IntoIter"]]};
initSearch(searchIndex);
