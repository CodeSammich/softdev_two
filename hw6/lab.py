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
