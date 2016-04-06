def pt(n):
    triples = []
    for a in xrange(1, n):
        for b in xrange(1, n):
            for c in xrange(1, n): #faster to use arange instead of range because arange doesn't store values in memorb
                if a**2 + b**2 == c**2 :
                    triples.append( [a, b, c] )
    return triples

def pt2(n):
    return [(a, b, c)
            for a in xrange(1,n)
            for b in xrange(1,n)
            for c in xrange(1,n)
            if a**2 + b**2 == c**2 ]

def quickSort(nums):
    #divide and conquer binary search
    #pivot in middle, then keep splitting each side (greater on one side and less on other)

    ### Pick a pivot
    ### Partition into 2 lists, s.t.
    ###    *all values < p are lower-half
    ###    *all values > p are upper-half
    ###    *pivot will be in the final resting position
    ###    *recursion!
    
    pivot = len(nums) / 2
    smaller = []
    larger = []
    for x in xrange(nums):
        if x < nums:
            smaller.append( x )
        else:
            larger.append( x )
    

print pt(25)
print pt2(25)
