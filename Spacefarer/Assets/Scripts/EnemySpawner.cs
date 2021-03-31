using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public GameObject[] enemies;
    public Transform[] spawnPoint;
    public int maxEnemies;
    private int startEnemyNum;

    private int randE;
    private int randS;

    public float startTimeBTSpawns;
    private float timeBTspawns;

    private void Start()
    {
        timeBTspawns = startTimeBTSpawns;
    }

    private void Update()
    {
        if (timeBTspawns <= 0 && startEnemyNum < maxEnemies )
        {
            randE = Random.Range(0, enemies.Length);
            randS = Random.Range(0, spawnPoint.Length);
            Instantiate(enemies[randE], spawnPoint[randS].transform.position, Quaternion.identity);
            startEnemyNum++;
            timeBTspawns = startTimeBTSpawns;
    
        }

        else
        {
            timeBTspawns -= Time.deltaTime;
        }
    }
}
