#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <algorithm>
#include <stdio.h>
#include <time.h>

using namespace std;

static int getRandomInt(int m) {
	srand(time(NULL));
	int randomOut = rand() % m + 1;
	return randomOut;
}

int main() {
	int handsome;
	handsome = getRandomInt(100);
	cout << "Chanom is only handsome : " << handsome << "\% of Me!";
	return 0;
}