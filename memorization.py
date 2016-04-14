### AIM: "Memorization"[:4] + "Memorization"[5:]
### DN: Formualte an explanation of the execution time of this algorithm:

##########################
'''
Dynamic Programming
(aka "dynamic optimization")
means of solving a complex problem by solving its component subproblems just once and storing their solutions

MEMOIZATION
"Memoization" (not a typo)

   Use of caches to retrieve previously computed values to reduce time complexity of algorithms
'''
###########################

''' Task: 

Rewrite fib(n) to employ dynamic programming 

'''

''' my code
d = {}
def fib2(n, d):
    first = d['fib' + n]
    second = d['fib' + (n - 1)]
    if n < 2:
        return 1
    else:
        if first == None:
            d.fib2( n, d )
        
        return 
'''

''' brown's code '''
def memoize(f):
    memo = {} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo: #if key doesn't exist, set fib(x) to key x
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n == 0:
        return 0
    if( n == 1 ):
        return 1
    else:
        return fib(n - 1) + fib(n - 2)



print fib( 10000 )

#fib = memoize(fib) #turn memoize into a decorator

### Check HW Page
