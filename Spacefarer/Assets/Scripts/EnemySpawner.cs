using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public GameObject[] enemies;
    public GameObject[] gameEndObjects;
    private GameObject newEnemy;
    public Transform[] spawnPoint;
    public int maxEnemies;
    private int startEnemyNum;

    public bool GameIsOver = false;

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
            newEnemy = Instantiate(enemies[randE], spawnPoint[randS].transform.position, Quaternion.identity);
            Destroy(newEnemy.gameObject, 8.0f);
            startEnemyNum++;
            timeBTspawns = startTimeBTSpawns;
    
            checkGameEnd(startEnemyNum);
        }

        else
        {
            timeBTspawns -= Time.deltaTime;
        }



    }

    void checkGameEnd(int start)
    {
            if(start == maxEnemies)
            {
                GameIsOver = true;
                StartCoroutine(Countdown());
            }
            
    }

    IEnumerator Countdown()
    {
        yield return new WaitForSeconds(6f);
        SceneManager.LoadScene("GameOver");
    }

}
