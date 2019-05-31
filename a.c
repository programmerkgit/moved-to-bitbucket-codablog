#include <stdlib.h>
#include <stdio.h>
#define MAXLEINE 120

static FILE *fpi;
static FILE *fpo;
static char line[MAXLEINE];
static int lineIndex = -1;

char nextChar()
{
  char ch;
  if(lineIndex == -1) {
    if(fgets(line, MAXLEINE, fpi) != NULL) {
      fputs(line, fpo);
      lineIndex = 0;
    } else {
      printf("end of file \n");
      exit(1);
    }
  }

  if((ch = line[lineIndex++]) == '\n') {
    lineIndex = -1;
    return ' ';
  }
  return ch;
}

int main() {
  fpi = fopen("a.c", "r");
  fpo = fopen("b.c", "w");
  char c = nextChar();
  printf("%c", c);
}
