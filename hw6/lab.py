'''

basic_list = [x for x in range(9)]
print basic_list

LC_LETTERS='abcdefghijklmnopqrstuvwxyz'
NUMERALS='0123456789'
CHARS='.?!&#,;:-_*'

def strength_check(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMERALS else
         0 for x in p ]
    return 1 in l and 2 in l and 3 in l

def strength_rate(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMERALS else
         4 if x in chars else 0 for x in p ]
    uc = len(p) - l.count(1)
    lc = len(p) - l.count(2)
    nums = len(p) - l.count(3)
    chrs = len(p) - l.count(4)

    strength = (uc + lc + nums + chrs)
    return strength

print p + ": " + str( strength_rate(p) )
print p2 + ": " + str( strength_rate(p2) )
print p3 + ": " + str( strength_rate(p3) )
print p4 + ": " + str( strength_rate(p4) )

def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
#print f(5) -> ?

flist = [inc,dec]
#print flist[1](5) -> ?

#####a simple closure in python:
def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

#add3(10) -> ?
#add5(10) -> ?)

###A py fxn can be written so as to build and return another fxn

###Call makeAdder(3) -> 3 is passed as param n so inner fxn reduces to ...

def make_counter():
    #private "instance" data
    #has to be a list due to weird python scoping rules
    count = [0]

    # public methods
    def inc():
        count[0]=count[0] + 1
    def dec():
        count[0]=count[0] + 1
    def reset():
        count[0]=0
    def get():
        return count[0]

    # return a dictionary so we have access to all the methods
    return { 'inc': inc, 'dec': dec, 'reset': reset, 'get': get }

c1 = make_counter()
c2 = make_counter()

##Must use clunky list notation:

c1['inc']()
c2['inc']()
c3['inc']()
#print c1['get']() -> ?

c2['inc']()
#print c2['get']() -> ?

c1['reset']()
#print c1['get]() -> ?

"
How is this useful?
Suppose routines like the following, which returns a string:
""

"
import random
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

"
Suppose many calls to get_name throughout code.
Suppose want to double name each time used.
A "traditional" way of doing this might be":


'''


import random

def dble(f):
    name = f()
    return name+name

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()

'''
2nd eg will have demo return "hellohello" whenever we invoke it.

equiv to:
get_name = double(get_name)

TAKEAWAY:
BAM: can write fxns that transform fxns.

A Python decorator is merely shorthand for 
calling a wrapper-type function like doubler.

A Python decorator encapsulates a closure.

A decorator allows to transparently wrap functionality.
'''

